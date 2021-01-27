# literal-case

[![npm version](https://badge.fury.io/js/literal-case.svg)](https://badge.fury.io/js/literal-case)

A TypeScript library for word case conversions, using Template Literal Types(TS >= 4.1).

## Installation

```bash
# NPM
npm install literal-case

# YARN
yarn add literal-case
```

## Case Converters

- [`camelCase`](#camelcase)
- [`pascalCase`](#pascalcase)
- [`snakeCase`](#snakecase)
- [`constantCase`](#constantcase)
- [`kebabCase`](#kebabcase)
- [`dotCase`](#dotcase)
- [`noCase`](#nocase)

## Case Types

- [`CamelCase<T>`](#camelcaset)
- [`PascalCase<T>`](#pascalcaset)
- [`SnakeCase<T>`](#snakecaset)
- [`ConstantCase<T>`](#constantcaset)
- [`KebabCase<T>`](#kebabcaset)
- [`DotCase<T>`](#dotcaset)
- [`NoCase<T,D>`](#nocasetd)

## Case Converters

### `camelCase`

```ts
const str: "fooBar" = camelCase("foo bar");
```

### `pascalCase`

```ts
const str: "FooBar" = pascalCase("foo bar");
```

### `snakeCase`

```ts
const str: "foo_bar" = snakeCase("foo bar");
```

### `constantCase`

```ts
const str: "FOO_BAR" = constantCase("foo bar");
```

### `kebabCase`

```ts
const str: "foo-bar" = kebabCase("foo bar");
```

### `dotCase`

```ts
const str: "foo.bar" = dotCase("foo bar");
```

### `noCase`

```ts
const str: "foo Bar" = noCase("fooBar");
```

## Case Types

### `CamelCase<T>`

```ts
// Expect: "fooBar"
type Result = CamelCase<"foo bar">;
```

### `PascalCase<T>`

```ts
// Expect: "FooBar"
type Result = PascalCase<"foo bar">;
```

### `SnakeCase<T>`

```ts
// Expect: "foo_bar"
type Result = SnakeCase<"foo bar">;
```

### `ConstantCase<T>`

```ts
// Expect: "FOO_BAR"
type Result = ConstantCase<"foo bar">;
```

### `KebabCase<T>`

```ts
// Expect: "foo-bar"
type Result = KebabCase<"foo bar">;
```

### `DotCase<T>`

```ts
// Expect: "foo.bar"
type Result = DotCase<"foo bar">;
```

### `NoCase<T,D>`

```ts
// Expect: "foo Bar"
type Result0 = NoCase<"fooBar">;

// Expect: "foo,Bar"
type Result1 = NoCase<"fooBar", ",">;
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Madono - [@MadonoHaru](https://twitter.com/MadonoHaru) - madonoharu@gmail.com

Project Link: https://github.com/MadonoHaru/literal-case.git
