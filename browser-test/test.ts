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
