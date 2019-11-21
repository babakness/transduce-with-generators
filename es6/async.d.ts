/// <reference lib="esnext" />
/// <reference lib="dom" />
/// <reference lib="esnext.asynciterable" />
declare type GeneralIterable<A> = AsyncIterable<A> | Iterable<A> | AsyncIterableIterator<A>;
/**
 * Asynchronous transducer, composes functions that reduce a stream of values
 * This is a curried function, first a variadic to accept functions as parameters
 * returns another function that take a sync or async iterables.
 */
export declare function transduce<A, B>(ab: (a: A) => B): (a: A) => B;
export declare function transduce<A, B, C>(ab: (a: A) => B, bc: (b: B) => C): (a: A) => C;
export declare function transduce<A, B, C, D>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): (a: A) => D;
export declare function transduce<A, B, C, D, E>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E): (a: A) => E;
export declare function transduce<A, B, C, D, E, F>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F): (a: A) => F;
export declare function transduce<A, B, C, D, E, F, G>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G): (a: A) => G;
export declare function transduce<A, B, C, D, E, F, G, H>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H): (a: A) => H;
export declare function transduce<A, B, C, D, E, F, G, H, I>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I): (a: A) => I;
export declare function transduce<A, B, C, D, E, F, G, H, I, J>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J): (a: A) => J;
export declare function type<A>(): (a: GeneralIterable<A>) => GeneralIterable<A>;
/**
 * Lifts a function into a stream of data, mapping incoming data to new outgoing data
 */
export declare function map<A, B>(fn: (p: A) => B): (inputs: GeneralIterable<A>) => AsyncGenerator<B, void, unknown>;
/**
 * Similar to `map` only adding a sequentially increment index as the second parameter.
 */
export declare function mapWithIndex<A, B>(fn: (a: A, index: number) => B): (inputs: GeneralIterable<A>) => AsyncGenerator<B, void, unknown>;
/**
 * Handy function generates a range of numbers in steps
 */
export declare function range(start: number, end: number, step?: number): Generator<number, void, unknown>;
/**
 * Lifts a predicate into a stream to selectively filter what data passes through
 */
export declare function filter<A>(fn: (a: A) => boolean): (inputs: GeneralIterable<A>) => AsyncGenerator<A, void, unknown>;
/**
 * Similar to `filter` only it add a sequentially increment index as the second parameter.
 */
export declare function filterWithIndex<A>(fn: (a: A, index: number) => boolean): (inputs: GeneralIterable<A>) => AsyncGenerator<A, void, unknown>;
/**
 * Maintains a rolling frame of the data. The first parameter is the number of items in the frame, the second is how many items to skip each frame.
 */
export declare function frame<A>(num: 1, move: number): (a: GeneralIterable<A>) => AsyncGenerator<[A], void, unknown>;
export declare function frame<A>(num: 2, move: number): (a: GeneralIterable<A>) => AsyncGenerator<[A, A], void, unknown>;
export declare function frame<A>(num: 3, move: number): (a: GeneralIterable<A>) => AsyncGenerator<[A, A, A], void, unknown>;
export declare function frame<A>(num: 4, move: number): (a: GeneralIterable<A>) => AsyncGenerator<[A, A, A, A], void, unknown>;
export declare function frame<A>(num: 5, move: number): (a: GeneralIterable<A>) => AsyncGenerator<[A, A, A, A, A], void, unknown>;
export declare function frame<A>(num: 6, move: number): (a: GeneralIterable<A>) => AsyncIterableIterator<A[]>;
export declare function frame<A>(num: number, move: number): (a: GeneralIterable<A>) => AsyncIterableIterator<A[]>;
/**
 * Waits to receive `num` number of items in a stream then groups them together
 */
export declare function chunk(num: 1): <A>(a: GeneralIterable<A>) => AsyncGenerator<[A], void, unknown>;
export declare function chunk(num: 2): <A>(a: GeneralIterable<A>) => AsyncGenerator<[A, A], void, unknown>;
export declare function chunk(num: 3): <A>(a: GeneralIterable<A>) => AsyncGenerator<[A, A, A], void, unknown>;
export declare function chunk(num: 4): <A>(a: GeneralIterable<A>) => AsyncGenerator<[A, A, A, A], void, unknown>;
export declare function chunk(num: 5): <A>(a: GeneralIterable<A>) => AsyncGenerator<[A, A, A, A, A], void, unknown>;
export declare function chunk(num: 6): <A>(a: GeneralIterable<A>) => AsyncGenerator<A[], void, unknown>;
/**
 * Takes up to a give number of items from a stream then stops listening
 */
export declare function take(num: number): <A>(inputs: GeneralIterable<A>) => AsyncGenerator<A, void, unknown>;
/**
 * Filters so that every `num` values passes through, second parameter is an offset
 */
export declare function every(num: number, offset?: number): <A>(a: GeneralIterable<A>) => AsyncGenerator<A, void, unknown>;
/**
 * Drops the first `num` number of items from stream
 */
export declare function drop(num: number): <A>(a: GeneralIterable<A>) => AsyncGenerator<A, void, unknown>;
/**
 * An asynchonous function that waits delays outgoing values by given time
 */
export declare function delay(time: number): <A>(a: GeneralIterable<A>) => AsyncGenerator<A, void, unknown>;
/**
 * Throttles the rate of incoming data
 */
export declare function throttle(num: number): <A>(a: GeneralIterable<A>) => AsyncGenerator<A, void, unknown>;
/**
 * Throttles the rate of incoming data, letting trailing information through
 */
export declare function throttleTrailing(num: number): <A>(a: GeneralIterable<A>) => AsyncGenerator<unknown, void, unknown>;
/**
 * Debounces incoming data, ignores information given too frequently
 */
export declare function debounce(num: number): <A>(iterable: GeneralIterable<A>) => AsyncGenerator<A, void, unknown>;
/**
 * Debounces incoming data, ignores information given too frequently
 * with a trailing response after the last incoming piece of information
 */
export declare function debounceTrailing(num: number): <A>(iterable: GeneralIterable<A>) => AsyncGenerator<unknown, never, unknown>;
declare type SubscribeFn<A> = (<B>(a: A) => B) | ((a: A) => void);
/**
 * Subscribes to a income stream, with error catching function.
 * Returns function which cancels subscription
 */
export declare function subscribeWithCatch<A>(fn: SubscribeFn<A>, errFn: (a: Error) => void, iterable: GeneralIterable<A>): () => boolean;
/**
 * Subscribes to a income stream, return function cancels subscription
 */
export declare function subscribe<A>(fn: SubscribeFn<A>, iterable: GeneralIterable<A>): () => boolean;
/**
 * Turns dom events on an element into a stream
 */
export declare function fromDomEvent(event: keyof HTMLElementEventMap, element: HTMLElement): AsyncGenerator<any, void, unknown>;
export {};