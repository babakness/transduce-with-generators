/// <reference lib="esnext" />
/// <reference lib="dom" />
/// <reference lib="esnext.asynciterable" />

// https://github.com/microsoft/TypeScript/issues/31363 

type GeneralIterable<A> =   AsyncIterable<A> | Iterable<A> | AsyncIterableIterator<A>

/**
 * Asynchronous transducer, composes functions that reduce a stream of values 
 * This is a curried function, first a variadic to accept functions as parameters 
 * returns another function that take a sync or async iterables.
 */
export function transduce<A, B>(ab: (a: A) => B): (a: A) => B
export function transduce<A, B, C>(ab: (a: A) => B, bc: (b: B) => C): (a: A) => C
export function transduce<A, B, C, D>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): (a: A) => D
export function transduce<A, B, C, D, E>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E): (a: A) => E
export function transduce<A, B, C, D, E, F>(
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F
): (a: A) => F
export function transduce<A, B, C, D, E, F, G>(
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G
): (a: A) => G
export function transduce<A, B, C, D, E, F, G, H>(
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H
): (a: A) => H
export function transduce<A, B, C, D, E, F, G, H, I>(
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I
): (a: A) => I
export function transduce<A, B, C, D, E, F, G, H, I, J>(
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J
): (a: A) => J
export function transduce( ...fns: Array<Function>): Function {
  return async function*( iter: AsyncIterable<unknown> | Iterable<unknown>) {
    const pipedGenerators = fns.reduce( (result,fn) => fn(result) , iter)
    for await ( const result of pipedGenerators) {
      yield result
    }
  }
}

export function type<A>() {
  return function ( a: GeneralIterable<A> ) {
    return a
  }
}

/**
 * Lifts a function into a stream of data, mapping incoming data to new outgoing data
 */
export function map<A,B>( fn: (p: A) => B) {
  return async function* ( inputs: GeneralIterable<A>) {
    for await ( const input of inputs ) {
      yield fn(input) 
    }
  } 
  
} 

/**
 * Similar to `map` only adding a sequentially increment index as the second parameter.
 */
export function mapWithIndex<A,B>( fn: (a: A, index: number) => B) {
  let index = 0
  return async function* ( inputs: GeneralIterable<A>) {
    for await ( const input of inputs ) {
      yield fn(input, index++)
    }
  }
}

/**
 * Handy function generates a range of numbers in steps
 */
export function* range( start: number, end: number, step = 1 ) {
  if( step === 0 ) return
  if( start === end ) return
  if( start < end && step < 0 ) return 
  if( start > end && step > 0 ) return 
  let check = true
  while( check ) {
    yield start
    start += step
    check = step > 0 ? start < end : start > end
  } 
}

/**
 * Lifts a predicate into a stream to selectively filter what data passes through
 */
export function filter<A>( fn: (a: A) => boolean) {
  return async function* ( inputs: GeneralIterable<A>) {
    for await ( const input of inputs) {
      if( fn(input) ) {
        yield input
      }
    }
  }
}

/**
 * Similar to `filter` only it add a sequentially increment index as the second parameter.
 */
export function filterWithIndex<A>( fn: (a: A, index: number) => boolean) {
  let index = 0
  return async function* ( inputs: GeneralIterable<A>) {
    for await ( const input of inputs) {
      if( fn( input, index++ ) ) {
        yield input
      }
    }
  }
}

/**
 * Maintains a rolling frame of the data. The first parameter is the number of items in the frame, the second is how many items to skip each frame.
 */
export function frame<A>( num: 1, move: number): (a: GeneralIterable<A> ) => AsyncGenerator<[ A ], void, unknown>
export function frame<A>( num: 2, move: number): (a: GeneralIterable<A> ) => AsyncGenerator<[ A, A ], void, unknown>
export function frame<A>( num: 3, move: number): (a: GeneralIterable<A> ) => AsyncGenerator<[ A, A, A ], void, unknown>
export function frame<A>( num: 4, move: number): (a: GeneralIterable<A> ) => AsyncGenerator<[ A, A, A, A ], void, unknown>
export function frame<A>( num: 5, move: number): (a: GeneralIterable<A> ) => AsyncGenerator<[A, A, A, A, A], void, unknown>
export function frame<A>( num: 6, move: number): (a: GeneralIterable<A> ) => AsyncIterableIterator<A[]> 
export function frame<A>( num: number, move: number): (a: GeneralIterable<A> ) => AsyncIterableIterator<A[]> 
export function frame<A>( num: number, move: number = 1) {
  return async function* ( inputs: GeneralIterable<A> ) {
    let arr: A[] = []
    for await ( const input of inputs ) {
      if( arr.length < num ) {
        arr.push( input )
      } else {
        yield arr
        arr = [...arr.slice(move), input ]
      }
    }
  } 
}

/**
 * Waits to receive `num` number of items in a stream then groups them together
 */
export function chunk( num: 1 ): <A>(a: GeneralIterable<A> ) => AsyncGenerator<[ A ], void, unknown>
export function chunk( num: 2 ): <A>(a: GeneralIterable<A> ) => AsyncGenerator<[ A, A ], void, unknown>
export function chunk( num: 3 ): <A>(a: GeneralIterable<A> ) => AsyncGenerator<[ A, A, A ], void, unknown>
export function chunk( num: 4 ): <A>(a: GeneralIterable<A> ) => AsyncGenerator<[ A, A, A, A ], void, unknown>
export function chunk( num: 5 ): <A>(a: GeneralIterable<A> ) => AsyncGenerator<[ A, A, A, A, A ], void, unknown>
export function chunk( num: 6 ): <A>(a: GeneralIterable<A> ) => AsyncGenerator<A[], void, unknown> 
export function chunk( num: number ) {
  return async function* <A>( inputs: GeneralIterable<A> ) {
    let arr: A[] = []
    for await ( const input of inputs ) {
      arr.push(input)
      if( arr.length === num ) {
        yield arr
        arr = []
      }
    }
  } 
}


/**
 * Takes up to a give number of items from a stream then stops listening
 */
export function take( num: number) {
  // wrapped to work around TS limitations
  let count = 0
  return async function* <A>( inputs: GeneralIterable<A>) {
    for await ( const input of inputs) {
      yield input
      if( count++ >= num ) return
    }
  }

}

/**
 * Filters so that every `num` values passes through, second parameter is an offset
 */
export function every( num: number, offset: number = 0) {
  // wrapped to work around TS limitations
  return <A>( a: GeneralIterable<A>) => filterWithIndex( 
    (_: A, index: number) => ( index + offset ) % num === 0 
  )( a )
}

/**
 * Drops the first `num` number of items from stream
 */
export function drop( num: number) {
  // wrapped to work around TS limitations
  return <A>( a: GeneralIterable<A> ) => filterWithIndex( 
    (_: A, index: number) => index >= num
  )( a )
}

function _sleep( m: number ) {
  return new Promise( ( resolve, reject ) => {
    let id = setTimeout( () => {
      clearTimeout( id )
      return resolve()
    }, m )
  })
}

/**
 * An asynchonous function that waits delays outgoing values by given time
 */
export function delay( time: number ) {
  return async function*<A>(  a: GeneralIterable<A> ) {
    for await( let item of a ) {
      await _sleep( time )
      yield item
    }
  }
}

/**
 * Throttles the rate of incoming data
 */
export function throttle( num: number ) {
  return async function* <A>( a: GeneralIterable<A> ) {
    let time = Date.now()
    for await ( let item of a ) {
      if( Date.now() - time > num ) {
        yield item
        time = Date.now()
      }
    }
  }
}


/**
 * Throttles the rate of incoming data, letting trailing information through
 */
export function throttleTrailing( num: number  ) {
  return async function* <A>( a: GeneralIterable<A>  ) {
    let time = Date.now()
    let timeoutId = 0
    for await ( let item of a ) {
      clearTimeout( timeoutId )
      if( Date.now() - time > num ) {
        yield item
      } else {
        yield new Promise((resolve,reject) => {
          timeoutId = setTimeout( () => {
            resolve(item)
            clearTimeout( timeoutId )
          }, num)
        })
      }
      time = Date.now()
    }
  }
}

/**
 * Debounces incoming data, ignores information given too frequently
 */
export function debounce( num: number ) {
  return async function* <A>( iterable: GeneralIterable<A>  ) {
    let time = -Infinity
    for await ( let item of iterable ) {
      if( Date.now() - time > num ) {
        yield item
      }
      time = Date.now()
    }
  }
}


/**
 * Debounces incoming data, ignores information given too frequently 
 * with a trailing response after the last incoming piece of information
 */
export function debounceTrailing( num: number ) {
  return async function* <A>( iterable: GeneralIterable<A>  ) {
    let resolve = (x:A) => {}
    let prom = new Promise( r => resolve = r)
    let timeoutId = 0
    subscribe(
      (item: A) => {
        clearTimeout( timeoutId )
        timeoutId = setTimeout( () => {
          resolve(item)
          prom = new Promise( r => resolve = r)
        } , num)
      }, iterable
    )
    while(true) {
      yield await prom
    }
  }
}

type SubscribeFn<A> = ( <B>(a:A ) => B  ) | ( (a: A ) => void )

/**
 * Subscribes to a income stream, with error catching function. 
 * Returns function which cancels subscription
 */
export function subscribeWithCatch<A>( fn: SubscribeFn<A>, errFn: (a: Error ) => void, iterable: GeneralIterable<A>  ) {
  let cancel = false
  const action = async () => {
    try {
      for await ( const item of iterable) {
        if( cancel ) { break }
        else { fn( item ) } 
      } 
    } catch ( e ) {
      let error: Error = e
      errFn( error )
    }

  }
  action()
  return () => cancel = true
}

/**
 * Subscribes to a income stream, return function cancels subscription
 */
export function subscribe<A>( fn: SubscribeFn<A>, iterable: GeneralIterable<A>  ) {
  return subscribeWithCatch( fn, (err: Error ) => { throw err }, iterable)
}

function fromDomEvenHelper( listenable: HTMLElement | SVGElement, event: keyof HTMLElementEventMap ) {
  let promise: undefined | Promise<any> = new Promise( ( resolve ) => {
    let handler: undefined | EventListener = (...args: any[]) => {
      listenable.removeEventListener(event, handler! )
      resolve(...args)
      handler = undefined
      promise = undefined
    }
    listenable.addEventListener(event, handler! )
  })
  return promise
}

/**
 * Turns dom events on an element into a stream
 */
export async function* fromDomEvent(event: keyof HTMLElementEventMap, element: HTMLElement) {
  while (true) {
    yield await fromDomEvenHelper(element, event)
  }
}

