/**
 * Transducer, composes functions that reduce a stream of values 
 * This is a curried function, first a variadic to accept functions as parameters 
 * returns another function that take a sync iterables.
 */
export function transduce<A, B>(ab: (a: A  ) => B & IterableIterator<unknown> ): (a: A) => B
export function transduce<A, B, C>(ab: (a: A  ) => B & IterableIterator<unknown>, bc: (b: B) => C): (a: A) => C
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
  return function*( iter: Iterable<unknown>) {
    const pipedGenerators = fns.reduce( (result,fn) => fn(result) , iter)
    for ( const result of pipedGenerators) {
      yield result
    }
   
  }
}

/**
 * Lifts a function into a stream of data, mapping incoming data to new outgoing data
 */
export function map<A,B>( fn: (p: A) => B) {
  return function* ( inputs: Iterable<A>) {
    for ( const input of inputs ) {
      yield fn(input) 
    }
  } 
} 

/**
 * Similar to `map` only adding a sequentially increment index as the second parameter.
 */
export function mapWithIndex<A,B>( fn: (a: A, index: number) => B) {
  let index = 0
  return function* ( inputs: Iterable<A>) {
    for ( const input of inputs ) {
      yield fn(input, index++)
    }
  }
}


/**
 * Maintains a rolling frame of the data. The first parameter is the number of items in the frame, the second is how many items to skip each frame.
 */
export function frame( num: 1, move: number): <A>(a: Iterable<A>) => Generator<[ A ], void, unknown>
export function frame( num: 2, move: number): <A>(a: Iterable<A>) => Generator<[ A, A ], void, unknown>
export function frame( num: 3, move: number): <A>(a: Iterable<A>) => Generator<[ A, A, A ], void, unknown>
export function frame( num: 4, move: number): <A>(a: Iterable<A>) => Generator<[ A, A, A, A ], void, unknown>
export function frame( num: 5, move: number): <A>(a: Iterable<A>) => Generator<[ A, A, A, A, A ], void, unknown>
export function frame( num: 6, move: number): <A>(a: Iterable<A>) => IterableIterator<A[]> 
export function frame( num: number, move: number): <A>(a: Iterable<A>) => IterableIterator<A[]> 
export function frame( num: number, move: number = 1) {
  return function* <A>( inputs: Iterable<A>) {
    let arr: A[] = []
    for ( const input of inputs ) {
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
 * Groups each `num` items together
 */
export function chunk( num: 1 ): <A>(a: Iterable<A>) => Generator<[ A ]>
export function chunk( num: 2 ): <A>(a: Iterable<A>) => Generator<[ A, A ]>
export function chunk( num: 3 ): <A>(a: Iterable<A>) => Generator<[ A, A, A ]>
export function chunk( num: 4 ): <A>(a: Iterable<A>) => Generator<[ A, A, A, A ]>
export function chunk( num: 5 ): <A>(a: Iterable<A>) => Generator<[ A, A, A, A, A ]>
export function chunk( num: 6 ): <A>(a: Iterable<A>) => IterableIterator<A[]> 
export function chunk( num: number ) {
  return function* <A>( inputs: Iterable<A> ) {
    let arr: A[] = []
    for ( const input of inputs ) {
      arr.push(input)
      if( arr.length === num ) {
        yield arr
        arr = []
      }
    }
  } 
}

/**
 * Lifts a predicate into a stream to selectively filter what data passes through
 */
export function filter<A>( fn: (a: A) => boolean) {
  return function* ( inputs: Iterable<A>) {
    for ( const input of inputs) {
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
  return function* ( inputs: Iterable<A>) {
    for ( const input of inputs) {
      if( fn( input, index++ ) ) {
        yield input
      }
    }
  }
}

/**
 * Takes up to a give number of items from a stream then stops listening
 */
export function take( num: number) {
  // wrapped to work around TS limitations
  return <A>( a: Iterable<A>) => filterWithIndex( 
    (_: A, index: number) => index < num 
  )( a )
}

/**
 * Filters so that every `num` values passes through, second parameter is an offset
 */
export function every( num: number, offset: number = 0) {
  // wrapped to work around TS limitations
  return <A>( a: Iterable<A>) => filterWithIndex( 
    (_: A, index: number) => ( index + offset ) % num === 0 
  )( a )
}

/**
 * Drops the first `num` number of items from stream
 */
export function drop( num: number) {
  // wrapped to work around TS limitations
  return <A>( a: Iterable<A>) => filterWithIndex( 
    (_: A, index: number) => index >= num
  )( a )
}
