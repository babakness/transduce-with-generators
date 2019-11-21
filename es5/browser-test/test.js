"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var T = __importStar(require("../es6/async"));
var triggerButton = document.getElementById('trigger');
var debounceCounterEl = document.getElementById('debounce-counter');
var debounceTrailingCounterEl = document.getElementById('debounce-trailing-counter');
var debounceCounter = 0;
var debounceTrailingCounter = 0;
var debounceStream1 = T.fromDomEvent('click', triggerButton);
var debounceStream2 = T.fromDomEvent('click', triggerButton);
function debounceCounterHandler(a) {
    if (debounceCounterEl) {
        // mutate state
        debounceCounter = debounceCounter + 1;
        // side effect
        debounceCounterEl.innerHTML = String(debounceCounter);
    }
}
function debounceCounterTrailingHandler(a) {
    if (debounceTrailingCounterEl) {
        // mutate state
        debounceTrailingCounter = debounceTrailingCounter + 1;
        // side effect
        debounceTrailingCounterEl.innerHTML = String(debounceTrailingCounter);
    }
}
var localDebounce = T.transduce(T.debounce(300));
var localDebounceTrailing = T.transduce(T.debounceTrailing(300));
T.subscribe(debounceCounterHandler, localDebounce(debounceStream1));
T.subscribe(debounceCounterTrailingHandler, localDebounceTrailing(debounceStream2));
/* Shuffle */
var shuffleInputEl = document.getElementById('shuffle-input');
var shuffleOutputEl = document.getElementById('shuffle-output');
var shuffleStream = T.fromDomEvent('keydown', shuffleInputEl);
function shuffleHandler(_a) {
    var _b = __read(_a, 2), a = _b[0], b = _b[1];
    if (shuffleOutputEl) {
        shuffleOutputEl.innerHTML = shuffleOutputEl.innerHTML + a + b;
    }
}
var mapping = {
    'backspace': '⌫',
    'enter': '↵',
    'arrowleft': '←',
    'arrowright': '→',
};
var transducer = T.transduce(T.map(function (event) { return event.key; }), T.map(function (key) {
    if (key.length > 1) {
        var keyLowered = key.toLowerCase();
        var mapped = keyLowered in mapping ? mapping[keyLowered] : '';
        return mapped;
    }
    else {
        return key;
    }
}), T.chunk(2), T.map(function (arr) { return arr.reverse(); }));
T.subscribe(shuffleHandler, transducer(shuffleStream));
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
