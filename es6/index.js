"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transduce(...fns) {
    return function* (iter) {
        const pipedGenerators = fns.reduce((result, fn) => fn(result), iter);
        for (const result of pipedGenerators) {
            yield result;
        }
    };
}
exports.transduce = transduce;
/**
 * Lifts a function into a stream of data, mapping incoming data to new outgoing data
 */
function map(fn) {
    return function* (inputs) {
        for (const input of inputs) {
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
    return function* (inputs) {
        for (const input of inputs) {
            yield fn(input, index++);
        }
    };
}
exports.mapWithIndex = mapWithIndex;
function frame(num, move = 1) {
    return function* (inputs) {
        let arr = [];
        for (const input of inputs) {
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
    return function* (inputs) {
        let arr = [];
        for (const input of inputs) {
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
 * Lifts a predicate into a stream to selectively filter what data passes through
 */
function filter(fn) {
    return function* (inputs) {
        for (const input of inputs) {
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
    return function* (inputs) {
        for (const input of inputs) {
            if (fn(input, index++)) {
                yield input;
            }
        }
    };
}
exports.filterWithIndex = filterWithIndex;
/**
 * Takes up to a give number of items from a stream then stops listening
 */
function take(num) {
    // wrapped to work around TS limitations
    return (a) => filterWithIndex((_, index) => index < num)(a);
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
