type UnwrapAux<T> = T extends never
  ? never
  : T extends { __rec: { __rec: infer U } }
  ? { __rec: UnwrapAux<U> }
  : T extends { __rec: infer U }
  ? U
  : T;

type Unwrap<T> = T extends { __rec: unknown } ? Unwrap<UnwrapAux<T>> : T;

type RepeatImpl1<
  T,
  N extends number,
  R extends unknown[] = []
> = R["length"] extends N ? R : { __rec: RepeatImpl1<T, N, [T, ...R]> };

type RepeatImpl2<T, N extends number> = Unwrap<RepeatImpl1<T, N>>;

type ToArray<T> = T extends unknown[] ? T : never;

export type Repeat<T, N extends number> = ToArray<RepeatImpl2<T, N>>;

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type LowerAlphabet =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

type UpperAlphabet = Uppercase<LowerAlphabet>;

type Literal = string | number | boolean | bigint;

type ValidChar = `${Digit}` | LowerAlphabet | UpperAlphabet;
type LowerChar = `${Digit}` | LowerAlphabet;

type ReplaceInvalidCharsImpl<
  S extends string,
  D extends string,
  R extends string = ""
> = S extends `${infer C}${infer U}`
  ? {
      __rec: ReplaceInvalidCharsImpl<
        U,
        D,
        `${R}${C extends ValidChar ? C : D}`
      >;
    }
  : R;

type ReplaceInvalidChars<S extends string, D extends string> = Unwrap<
  ReplaceInvalidCharsImpl<S, D>
>;

type RemoveConsecutiveDelimitersImpl<
  S extends string,
  D extends string,
  R extends string = ""
> = S extends `${infer S0}${D}${D}${infer S1}`
  ? { __rec: RemoveConsecutiveDelimitersImpl<`${D}${S1}`, D, `${R}${S0}`> }
  : S extends `${infer C}${infer U}`
  ? { __rec: RemoveConsecutiveDelimitersImpl<U, D, `${R}${C}`> }
  : R;

type RemoveConsecutiveDelimiters<S extends string, D extends string> = Unwrap<
  RemoveConsecutiveDelimitersImpl<S, D>
>;

type TrimImpl<S extends string, D extends string> = D extends ""
  ? S
  : S extends `${D}${infer U}`
  ? { __rec: TrimImpl<U, D> }
  : S extends `${infer U}${D}`
  ? { __rec: U }
  : S;

type Trim<S extends string, D extends string> = Unwrap<TrimImpl<S, D>>;

type Format<S extends string, D extends string> = Trim<
  RemoveConsecutiveDelimiters<ReplaceInvalidChars<S, D>, D>,
  D
>;

export type Chars<S extends string> = string extends S
  ? string[]
  : S extends `${infer C0}${infer C1}${infer C2}${infer C3}${infer C4}${infer C5}${infer C6}${infer C7}${infer C8}${infer C9}${infer R}`
  ? [C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, ...Chars<R>]
  : S extends `${infer C}${infer R}`
  ? [C, ...Chars<R>]
  : S extends ""
  ? []
  : never;

export type JoinChars<T extends unknown[]> = T extends []
  ? ""
  : T extends [...Repeat<Literal, 10>, ...infer R]
  ? `${T[0]}${T[1]}${T[2]}${T[3]}${T[4]}${T[5]}${T[6]}${T[7]}${T[8]}${T[9]}${JoinChars<R>}`
  : T extends [Literal, ...infer R]
  ? `${T[0]}${JoinChars<R>}`
  : string;

type NoCaseImpl<
  T extends unknown[],
  D extends string,
  R extends unknown[] = []
> = T extends [LowerChar, UpperAlphabet, ...infer U]
  ? { __rec: NoCaseImpl<U, D, [...R, T[0], D, T[1]]> }
  : T extends [UpperAlphabet, UpperAlphabet, LowerAlphabet, ...infer U]
  ? { __rec: NoCaseImpl<U, D, [...R, T[0], D, T[1], T[2]]> }
  : T extends [Literal, ...infer U]
  ? { __rec: NoCaseImpl<U, D, [...R, T[0]]> }
  : { __rec: R };

export type NoCase<S extends string, D extends string = " "> = JoinChars<
  Unwrap<NoCaseImpl<Chars<Format<S, D>>, D>>
>;

type JoinNumbers<S extends string> = S extends `${infer W} ${infer R}`
  ? R extends `${number}${string}`
    ? `${W}_${JoinNumbers<R>}`
    : `${W} ${JoinNumbers<R>}`
  : S;

type PascalCaseImpl<S extends string> = string extends S
  ? string
  : S extends `${infer W} ${infer R}`
  ? `${Capitalize<Lowercase<W>>}${PascalCaseImpl<R>}`
  : Capitalize<Lowercase<S>>;

export type PascalCase<S extends string> = {
  __rec: PascalCaseImpl<JoinNumbers<NoCase<S>>>;
}["__rec"];

export type CamelCase<S extends string> = {
  __rec: Uncapitalize<PascalCase<S>>;
}["__rec"];

export type SnakeCase<S extends string> = {
  __rec: Lowercase<NoCase<S, "_">>;
}["__rec"];

export type ConstantCase<S extends string> = {
  __rec: Uppercase<NoCase<S, "_">>;
}["__rec"];

export type KebabCase<S extends string> = {
  __rec: Lowercase<NoCase<S, "-">>;
}["__rec"];

export type DotCase<S extends string> = {
  __rec: Lowercase<NoCase<S, ".">>;
}["__rec"];
