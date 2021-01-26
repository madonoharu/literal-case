import {
  CamelCase,
  ConstantCase,
  DotCase,
  KebabCase,
  NoCase,
  PascalCase,
  SnakeCase,
} from "./types";

export * from "./types";

type NoCaseFn = <T extends string>(str: T) => NoCase<T>;
type PascalCaseFn = <T extends string>(str: T) => PascalCase<T>;
type CamelCaseFn = <T extends string>(str: T) => CamelCase<T>;
type SnakeCaseFn = <T extends string>(str: T) => SnakeCase<T>;
type ConstantCaseFn = <T extends string>(str: T) => ConstantCase<T>;
type KebabCaseFn = <T extends string>(str: T) => KebabCase<T>;
type DotCaseFn = <T extends string>(str: T) => DotCase<T>;

const format = (str: string) =>
  str
    .replace(/[^A-Za-z0-9]/g, " ")
    .replace(/ +/, " ")
    .trim();

export const noCase = ((str: string) =>
  format(
    str
      .replace(/([a-z0-9])([A-Z])/g, `$1 $2`)
      .replace(/([A-Z])([A-Z][a-z])/g, `$1 $2`)
  )) as NoCaseFn;

const toPascalCaseWord = (word: string) => {
  const firstChar = word.charAt(0).toUpperCase();
  const rest = word.substr(1).toLowerCase();

  return firstChar + rest;
};

export const pascalCase = ((str: string) =>
  noCase(str)
    .replace(/ (?=\d)/g, "_")
    .split(" ")
    .map(toPascalCaseWord)
    .join("")) as PascalCaseFn;

export const camelCase = ((str: string) =>
  pascalCase(str).replace(/^[A-Z]/, (s) => s.toLowerCase())) as CamelCaseFn;

export const snakeCase = ((str: string) =>
  noCase(str).replace(/ /g, "_").toLowerCase()) as SnakeCaseFn;

export const constantCase = ((str: string) =>
  noCase(str).replace(/ /g, "_").toUpperCase()) as ConstantCaseFn;

export const kebabCase = ((str: string) =>
  noCase(str).replace(/ /g, "-").toLowerCase()) as KebabCaseFn;

export const dotCase = ((str: string) =>
  noCase(str).replace(/ /g, ".").toLowerCase()) as DotCaseFn;
