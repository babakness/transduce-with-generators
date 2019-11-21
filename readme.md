# Introduction

This library implements a transducer library capable of handling asychronous streams of data as part of a study on generators and asychronous generators in JavaScript and TypeScript.

Note: this is an experimental library.

# Installation

To install:

`npm install transduce-with-generators`

or 

`yarn add transduce-with-generators`

# Usage

ES6 and ES5 builds are exposed. Example from integration test:

```ts
import * as T from 'transduce-with-generators/es6/async'

let triggerButton = document.getElementById('trigger')
let debounceCounterEl = document.getElementById('debounce-counter')
let debounceTrailingCounterEl = document.getElementById('debounce-trailing-counter')
let debounceCounter = 0
let debounceTrailingCounter = 0
let debounceStream1 = T.fromDomEvent( 'click' , triggerButton! )
let debounceStream2 = T.fromDomEvent( 'click' , triggerButton! )

function debounceCounterHandler( a: unknown ) {
  if(debounceCounterEl) {
    // mutate state
    debounceCounter = debounceCounter + 1
    // side effect
    debounceCounterEl.innerHTML = String(debounceCounter)
  }
}

function debounceCounterTrailingHandler( a: unknown ) {
  if( debounceTrailingCounterEl) {
    // mutate state
    debounceTrailingCounter = debounceTrailingCounter + 1
    // side effect
    debounceTrailingCounterEl.innerHTML = String(debounceTrailingCounter)
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
```

# Legal

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.