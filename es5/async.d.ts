/**
 *
 * @example
 *
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
export declare function map<A, B>(fn: (p: A) => B): (inputs: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<B>;
export declare function mapWithIndex<A, B>(fn: (a: A, index: number) => B): (inputs: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<B>;
export declare function filter<A>(fn: (a: A) => boolean): (inputs: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<A>;
export declare function filterWithIndex<A>(fn: (a: A, index: number) => boolean): (inputs: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<A>;
export declare function frame(num: 1, move: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<[A]>;
export declare function frame(num: 2, move: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<[A, A]>;
export declare function frame(num: 3, move: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<[A, A, A]>;
export declare function frame(num: 4, move: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<[A, A, A, A]>;
export declare function frame(num: 5, move: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<[A, A, A, A, A]>;
export declare function frame(num: 6, move: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<A[]>;
export declare function frame(num: number, move: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<A[]>;
export declare function chunk(num: 1): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<[A]>;
export declare function chunk(num: 2): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<[A, A]>;
export declare function chunk(num: 3): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<[A, A, A]>;
export declare function chunk(num: 4): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<[A, A, A, A]>;
export declare function chunk(num: 5): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<[A, A, A, A, A]>;
export declare function chunk(num: 6): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<A[]>;
export declare function take(num: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<A>;
export declare function every(num: number, offset?: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<A>;
export declare function drop(num: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<A>;
export declare function delay(time: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<A>;
export declare function throttle(num: number): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<A>;
export declare function debounce(num: number, { trailing }?: {
    trailing?: boolean | undefined;
}): <A>(a: AsyncIterable<A> | Iterable<A>) => AsyncIterableIterator<unknown>;
declare type SubscribeFn<A> = (<B>(a: A) => B) | ((a: A) => void);
export declare function subscribe<A>(fn: SubscribeFn<A>, iterable: AsyncIterable<A> | Iterable<A>): () => boolean;
export declare function streamify(event: keyof HTMLElementEventMap, element: HTMLElement): AsyncIterableIterator<any>;
export {};
