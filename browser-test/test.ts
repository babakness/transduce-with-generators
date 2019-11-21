import * as T from '../es6/async'

let triggerButton = document.getElementById( 'trigger' )
let debounceCounterEl = document.getElementById( 'debounce-counter' )
let debounceTrailingCounterEl = document.getElementById( 'debounce-trailing-counter' )
let debounceCounter = 0
let debounceTrailingCounter = 0
let debounceStream1 = T.fromDomEvent( 'click' , triggerButton! )
let debounceStream2 = T.fromDomEvent( 'click' , triggerButton! )


function debounceCounterHandler( a: unknown ) {
  if(debounceCounterEl) {
    // mutate state
    debounceCounter = debounceCounter + 1
    // side effect
    debounceCounterEl.innerHTML = String( debounceCounter )
  }
}

function debounceCounterTrailingHandler( a: unknown ) {
  if( debounceTrailingCounterEl) {
    // mutate state
    debounceTrailingCounter = debounceTrailingCounter + 1
    // side effect
    debounceTrailingCounterEl.innerHTML = String( debounceTrailingCounter  )
  }
}

let localDebounce= T.transduce(
  T.debounce( 300 )
)
let localDebounceTrailing = T.transduce(
  T.debounceTrailing( 300 )
)
T.subscribe( debounceCounterHandler, localDebounce( debounceStream1 ) )
T.subscribe( debounceCounterTrailingHandler, localDebounceTrailing( debounceStream2 ) )


/* Shuffle */

let shuffleInputEl = document.getElementById( 'shuffle-input' )
let shuffleOutputEl = document.getElementById(' shuffle-output' )
let shuffleStream = T.fromDomEvent( 'keydown' , shuffleInputEl! )



function shuffleHandler( [a,b]: string[] ){
  if( shuffleOutputEl ) {
    shuffleOutputEl.innerHTML = shuffleOutputEl.innerHTML + a + b
  }
}

let mapping: Record<string,string> = {
  'backspace': '⌫',
  'enter': '↵',
  'arrowleft': '←',
  'arrowright': '→',
}
let transducer = T.transduce(
  T.map( ( event: KeyboardEvent ) => event.key ),
  T.map( ( key: string ) => {
    if( key.length > 1 ) {
      let keyLowered = key.toLowerCase()
      let mapped = keyLowered in mapping ? mapping[keyLowered] : ''
      return mapped
    } else {
      return key
    }
  }),
  T.chunk( 2 ),
  T.map( ( arr ) => arr.reverse() )
)

T.subscribe( shuffleHandler, transducer( shuffleStream )  )

    
// T.transduce(
//       T.map( ( a: number ) => a++),
// )

// let button = document.getElementById('button')

// async function main() {
//   let counter = 0
//   let foo = T.transduce(
//     T.map( ( a: number ) => counter++),
//     T.delay( 1000 ),
//     T.map( ( x: number) => x + 2),
//     T.frame( 3, 3 ),
//     T.map( x => (console.log(x),x) ),
//   )

//   let clicky = T.transduce(
//     T.debounce( 1000 )
//   )

//   // for await (let i of foo( [1,2,3] ) ) {
//   //   console.log( i )
//   // }


//   let goldenMeanSequence = ( quantity: number ) => T.transduce(
//     T.type<number>(),
//     T.take( quantity ),
//     T.frame( 2, 1 ),
//     T.map( ( [a,b]  ) => a/b )
//   )( fib() )   



//   function* fib ( a = 0, b = 1): Iterable<number> {
//     yield a
//     yield* fib( b, a+b )
//   }
  

//   T.subscribe( bar, goldenMeanSequence(25)  )


//   let stream = T.fromDomEvent( 'click' , button! )
//   function bar( a: unknown ) {
//     console.log( a ) 
//   }
//   T.subscribe( bar, clicky( stream ) )
//   T.subscribe( bar, T.transduce( T.delay( 1000 ) ) ( T.range( 0, 10 ) ) )

// }

// main()

// type Foo<A> = [A,A]
// let a = [ 1 , 2 ] as Foo<number>