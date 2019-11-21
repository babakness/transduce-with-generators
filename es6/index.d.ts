/**
 * Transducer, composes functions that reduce a stream of values
 * This is a curried function, first a variadic to accept functions as parameters
 * returns another function that take a sync iterables.
 */
export declare function transduce<A, B>(ab: (a: A) => B & IterableIterator<unknown>): (a: A) => B;
export declare function transduce<A, B, C>(ab: (a: A) => B & IterableIterator<unknown>, bc: (b: B) => C): (a: A) => C;
export declare function transduce<A, B, C, D>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): (a: A) => D;
export declare function transduce<A, B, C, D, E>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E): (a: A) => E;
export declare function transduce<A, B, C, D, E, F>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F): (a: A) => F;
export declare function transduce<A, B, C, D, E, F, G>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G): (a: A) => G;
export declare function transduce<A, B, C, D, E, F, G, H>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H): (a: A) => H;
export declare function transduce<A, B, C, D, E, F, G, H, I>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I): (a: A) => I;
export declare function transduce<A, B, C, D, E, F, G, H, I, J>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J): (a: A) => J;
/**
 * Lifts a function into a stream of data, mapping incoming data to new outgoing data
 */
export declare function map<A, B>(fn: (p: A) => B): (inputs: Iterable<A>) => Generator<B, void, unknown>;
/**
 * Similar to `map` only adding a sequentially increment index as the second parameter.
 */
export declare function mapWithIndex<A, B>(fn: (a: A, index: number) => B): (inputs: Iterable<A>) => Generator<B, void, unknown>;
/**
 * Maintains a rolling frame of the data. The first parameter is the number of items in the frame, the second is how many items to skip each frame.
 */
export declare function frame(num: 1, move: number): <A>(a: Iterable<A>) => Generator<[A], void, unknown>;
export declare function frame(num: 2, move: number): <A>(a: Iterable<A>) => Generator<[A, A], void, unknown>;
export declare function frame(num: 3, move: number): <A>(a: Iterable<A>) => Generator<[A, A, A], void, unknown>;
export declare function frame(num: 4, move: number): <A>(a: Iterable<A>) => Generator<[A, A, A, A], void, unknown>;
export declare function frame(num: 5, move: number): <A>(a: Iterable<A>) => Generator<[A, A, A, A, A], void, unknown>;
export declare function frame(num: 6, move: number): <A>(a: Iterable<A>) => IterableIterator<A[]>;
export declare function frame(num: number, move: number): <A>(a: Iterable<A>) => IterableIterator<A[]>;
/**
 * Groups each `num` items together
 */
export declare function chunk(num: 1): <A>(a: Iterable<A>) => Generator<[A]>;
export declare function chunk(num: 2): <A>(a: Iterable<A>) => Generator<[A, A]>;
export declare function chunk(num: 3): <A>(a: Iterable<A>) => Generator<[A, A, A]>;
export declare function chunk(num: 4): <A>(a: Iterable<A>) => Generator<[A, A, A, A]>;
export declare function chunk(num: 5): <A>(a: Iterable<A>) => Generator<[A, A, A, A, A]>;
export declare function chunk(num: 6): <A>(a: Iterable<A>) => IterableIterator<A[]>;
/**
 * Lifts a predicate into a stream to selectively filter what data passes through
 */
export declare function filter<A>(fn: (a: A) => boolean): (inputs: Iterable<A>) => Generator<A, void, unknown>;
/**
 * Similar to `filter` only it add a sequentially increment index as the second parameter.
 */
export declare function filterWithIndex<A>(fn: (a: A, index: number) => boolean): (inputs: Iterable<A>) => Generator<A, void, unknown>;
/**
 * Takes up to a give number of items from a stream then stops listening
 */
export declare function take(num: number): <A>(a: Iterable<A>) => Generator<A, void, unknown>;
/**
 * Filters so that every `num` values passes through, second parameter is an offset
 */
export declare function every(num: number, offset?: number): <A>(a: Iterable<A>) => Generator<A, void, unknown>;
/**
 * Drops the first `num` number of items from stream
 */
export declare function drop(num: number): <A>(a: Iterable<A>) => Generator<A, void, unknown>;
