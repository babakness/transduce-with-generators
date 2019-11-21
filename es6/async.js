"use strict";
/// <reference lib="esnext" />
/// <reference lib="dom" />
/// <reference lib="esnext.asynciterable" />
Object.defineProperty(exports, "__esModule", { value: true });
function transduce(...fns) {
    return async function* (iter) {
        const pipedGenerators = fns.reduce((result, fn) => fn(result), iter);
        for await (const result of pipedGenerators) {
            yield result;
        }
    };
}
exports.transduce = transduce;
function type() {
    return function (a) {
        return a;
    };
}
exports.type = type;
/**
 * Lifts a function into a stream of data, mapping incoming data to new outgoing data
 */
function map(fn) {
    return async function* (inputs) {
        for await (const input of inputs) {
            yield fn(input);
        }
    };
}
exports.map = map;
/**
 * Similar to `map` only adding a sequentially increment index as the second parameter.
 */
function mapWithIndex(fn) {
    let index = 0;
    return async function* (inputs) {
        for await (const input of inputs) {
            yield fn(input, index++);
        }
    };
}
exports.mapWithIndex = mapWithIndex;
/**
 * Handy function generates a range of numbers in steps
 */
function* range(start, end, step = 1) {
    if (step === 0)
        return;
    if (start === end)
        return;
    if (start < end && step < 0)
        return;
    if (start > end && step > 0)
        return;
    let check = true;
    while (check) {
        yield start;
        start += step;
        check = step > 0 ? start < end : start > end;
    }
}
exports.range = range;
/**
 * Lifts a predicate into a stream to selectively filter what data passes through
 */
function filter(fn) {
    return async function* (inputs) {
        for await (const input of inputs) {
            if (fn(input)) {
                yield input;
            }
        }
    };
}
exports.filter = filter;
/**
 * Similar to `filter` only it add a sequentially increment index as the second parameter.
 */
function filterWithIndex(fn) {
    let index = 0;
    return async function* (inputs) {
        for await (const input of inputs) {
            if (fn(input, index++)) {
                yield input;
            }
        }
    };
}
exports.filterWithIndex = filterWithIndex;
function frame(num, move = 1) {
    return async function* (inputs) {
        let arr = [];
        for await (const input of inputs) {
            if (arr.length < num) {
                arr.push(input);
            }
            else {
                yield arr;
                arr = [...arr.slice(move), input];
            }
        }
    };
}
exports.frame = frame;
function chunk(num) {
    return async function* (inputs) {
        let arr = [];
        for await (const input of inputs) {
            arr.push(input);
            if (arr.length === num) {
                yield arr;
                arr = [];
            }
        }
    };
}
exports.chunk = chunk;
/**
 * Takes up to a give number of items from a stream then stops listening
 */
function take(num) {
    // wrapped to work around TS limitations
    let count = 0;
    return async function* (inputs) {
        for await (const input of inputs) {
            yield input;
            if (count++ >= num)
                return;
        }
    };
}
exports.take = take;
/**
 * Filters so that every `num` values passes through, second parameter is an offset
 */
function every(num, offset = 0) {
    // wrapped to work around TS limitations
    return (a) => filterWithIndex((_, index) => (index + offset) % num === 0)(a);
}
exports.every = every;
/**
 * Drops the first `num` number of items from stream
 */
function drop(num) {
    // wrapped to work around TS limitations
    return (a) => filterWithIndex((_, index) => index >= num)(a);
}
exports.drop = drop;
function _sleep(m) {
    return new Promise((resolve, reject) => {
        let id = setTimeout(() => {
            clearTimeout(id);
            return resolve();
        }, m);
    });
}
/**
 * An asynchonous function that waits delays outgoing values by given time
 */
function delay(time) {
    return async function* (a) {
        for await (let item of a) {
            await _sleep(time);
            yield item;
        }
    };
}
exports.delay = delay;
/**
 * Throttles the rate of incoming data
 */
function throttle(num) {
    return async function* (a) {
        let time = Date.now();
        for await (let item of a) {
            if (Date.now() - time > num) {
                yield item;
                time = Date.now();
            }
        }
    };
}
exports.throttle = throttle;
/**
 * Throttles the rate of incoming data, letting trailing information through
 */
function throttleTrailing(num) {
    return async function* (a) {
        let time = Date.now();
        let timeoutId = 0;
        for await (let item of a) {
            clearTimeout(timeoutId);
            if (Date.now() - time > num) {
                yield item;
            }
            else {
                yield new Promise((resolve, reject) => {
                    timeoutId = setTimeout(() => {
                        resolve(item);
                        clearTimeout(timeoutId);
                    }, num);
                });
            }
            time = Date.now();
        }
    };
}
exports.throttleTrailing = throttleTrailing;
/**
 * Debounces incoming data, ignores information given too frequently
 */
function debounce(num) {
    return async function* (iterable) {
        let time = -Infinity;
        for await (let item of iterable) {
            if (Date.now() - time > num) {
                yield item;
            }
            time = Date.now();
        }
    };
}
exports.debounce = debounce;
/**
 * Debounces incoming data, ignores information given too frequently
 * with a trailing response after the last incoming piece of information
 */
function debounceTrailing(num) {
    return async function* (iterable) {
        let resolve = (x) => { };
        let prom = new Promise(r => resolve = r);
        let timeoutId = 0;
        subscribe((item) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                resolve(item);
                prom = new Promise(r => resolve = r);
            }, num);
        }, iterable);
        while (true) {
            yield await prom;
        }
    };
}
exports.debounceTrailing = debounceTrailing;
/**
 * Subscribes to a income stream, with error catching function.
 * Returns function which cancels subscription
 */
function subscribeWithCatch(fn, errFn, iterable) {
    let cancel = false;
    const action = async () => {
        try {
            for await (const item of iterable) {
                if (cancel) {
                    break;
                }
                else {
                    fn(item);
                }
            }
        }
        catch (e) {
            let error = e;
            errFn(error);
        }
    };
    action();
    return () => cancel = true;
}
exports.subscribeWithCatch = subscribeWithCatch;
/**
 * Subscribes to a income stream, return function cancels subscription
 */
function subscribe(fn, iterable) {
    return subscribeWithCatch(fn, (err) => { throw err; }, iterable);
}
exports.subscribe = subscribe;
function fromDomEvenHelper(listenable, event) {
    let promise = new Promise((resolve) => {
        let handler = (...args) => {
            listenable.removeEventListener(event, handler);
            resolve(...args);
            handler = undefined;
            promise = undefined;
        };
        listenable.addEventListener(event, handler);
    });
    return promise;
}
/**
 * Turns dom events on an element into a stream
 */
async function* fromDomEvent(event, element) {
    while (true) {
        yield await fromDomEvenHelper(element, event);
    }
}
exports.fromDomEvent = fromDomEvent;
