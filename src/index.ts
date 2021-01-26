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

const format = (str: string) =>
  str
    .replace(/[^A-Za-z0-9]/g, " ")
    .replace(/ +/, " ")
    .trim();

export const noCase = <T extends string>(str: T): NoCase<T> =>
  format(
    str
      .replace(/([a-z0-9])([A-Z])/g, `$1 $2`)
      .replace(/([A-Z])([A-Z][a-z])/g, `$1 $2`)
  ) as NoCase<T>;

const toPascalCaseWord = (word: string) => {
  const firstChar = word.charAt(0).toUpperCase();
  const rest = word.substr(1).toLowerCase();

  return firstChar + rest;
};

export const pascalCase = <T extends string>(str: T): PascalCase<T> =>
  noCase(str)
    .replace(/ (?=\d)/g, "_")
    .split(" ")
    .map(toPascalCaseWord)
    .join("") as PascalCase<T>;

export const camelCase = <T extends string>(str: T): CamelCase<T> =>
  pascalCase(str).replace(/^[A-Z]/, (s) => s.toLowerCase()) as CamelCase<T>;

export const snakeCase = <T extends string>(str: T): SnakeCase<T> =>
  noCase(str).replace(/ /g, "_").toLowerCase() as SnakeCase<T>;

export const constantCase = <T extends string>(str: T): ConstantCase<T> =>
  noCase(str).replace(/ /g, "_").toUpperCase() as ConstantCase<T>;

export const kebabCase = <T extends string>(str: T): KebabCase<T> =>
  noCase(str).replace(/ /g, "-").toLowerCase() as KebabCase<T>;

export const dotCase = <T extends string>(str: T): DotCase<T> =>
  noCase(str).replace(/ /g, ".").toLowerCase() as DotCase<T>;
