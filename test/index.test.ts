import {
  noCase,
  NoCase,
  camelCase,
  CamelCase,
  pascalCase,
  PascalCase,
  snakeCase,
  SnakeCase,
  constantCase,
  ConstantCase,
  kebabCase,
  KebabCase,
  dotCase,
  DotCase,
} from "../src";

const table = [
  "",
  "test string",
  "Test String",
  "TESTString",
  "__TEST_STRING__",
  "TestN1",
  "test 1.2.3",
  "LongLongLongLongLongLongLongLongLongLongLongLongLongLong",
] as const;

describe("no case", () => {
  const testCase = <T extends string>(input: T, expected: NoCase<T>) => {
    it(`${input} -> ${expected}`, () => {
      const actual = noCase(input);
      expect(actual).toBe(expected);
    });
  };

  testCase(table[0], "");
  testCase(table[1], "test string");
  testCase(table[2], "Test String");
  testCase(table[3], "TEST String");
  testCase(table[4], "TEST STRING");
  testCase(table[5], "Test N1");
  testCase(table[6], "test 1 2 3");
  testCase(
    table[7],
    "Long Long Long Long Long Long Long Long Long Long Long Long Long Long"
  );
});

describe("camel case", () => {
  const testCase = <T extends string>(input: T, expected: CamelCase<T>) => {
    it(`${input} -> ${expected}`, () => {
      const actual = camelCase(input);
      expect(actual).toBe(expected);
    });
  };

  testCase(table[0], "");
  testCase(table[1], "testString");
  testCase(table[2], "testString");
  testCase(table[3], "testString");
  testCase(table[4], "testString");
  testCase(table[5], "testN1");
  testCase(table[6], "test_1_2_3");
  testCase(
    table[7],
    "longLongLongLongLongLongLongLongLongLongLongLongLongLong"
  );
});

describe("pascal case", () => {
  const testCase = <T extends string>(input: T, expected: PascalCase<T>) => {
    it(`${input} -> ${expected}`, () => {
      const actual = pascalCase(input);
      expect(actual).toBe(expected);
    });
  };

  testCase(table[0], "");
  testCase(table[1], "TestString");
  testCase(table[2], "TestString");
  testCase(table[3], "TestString");
  testCase(table[4], "TestString");
  testCase(table[5], "TestN1");
  testCase(table[6], "Test_1_2_3");
  testCase(
    table[7],
    "LongLongLongLongLongLongLongLongLongLongLongLongLongLong"
  );
});

describe("snake case", () => {
  const testCase = <T extends string>(input: T, expected: SnakeCase<T>) => {
    it(`${input} -> ${expected}`, () => {
      const actual = snakeCase(input);
      expect(actual).toBe(expected);
    });
  };

  testCase(table[0], "");
  testCase(table[1], "test_string");
  testCase(table[2], "test_string");
  testCase(table[3], "test_string");
  testCase(table[4], "test_string");
  testCase(table[5], "test_n1");
  testCase(table[6], "test_1_2_3");
  testCase(
    table[7],
    "long_long_long_long_long_long_long_long_long_long_long_long_long_long"
  );
});

describe("constant case", () => {
  const testCase = <T extends string>(input: T, expected: ConstantCase<T>) => {
    it(`${input} -> ${expected}`, () => {
      const actual = constantCase(input);
      expect(actual).toBe(expected);
    });
  };

  testCase(table[0], "");
  testCase(table[1], "TEST_STRING");
  testCase(table[2], "TEST_STRING");
  testCase(table[3], "TEST_STRING");
  testCase(table[4], "TEST_STRING");
  testCase(table[5], "TEST_N1");
  testCase(table[6], "TEST_1_2_3");
  testCase(
    table[7],
    "LONG_LONG_LONG_LONG_LONG_LONG_LONG_LONG_LONG_LONG_LONG_LONG_LONG_LONG"
  );
});

describe("kebab case", () => {
  const testCase = <T extends string>(input: T, expected: KebabCase<T>) => {
    it(`${input} -> ${expected}`, () => {
      const actual = kebabCase(input);
      expect(actual).toBe(expected);
    });
  };

  testCase(table[0], "");
  testCase(table[1], "test-string");
  testCase(table[2], "test-string");
  testCase(table[3], "test-string");
  testCase(table[4], "test-string");
  testCase(table[5], "test-n1");
  testCase(table[6], "test-1-2-3");
  testCase(
    table[7],
    "long-long-long-long-long-long-long-long-long-long-long-long-long-long"
  );
});

describe("dot case", () => {
  const testCase = <T extends string>(input: T, expected: DotCase<T>) => {
    it(`${input} -> ${expected}`, () => {
      const actual = dotCase(input);
      expect(actual).toBe(expected);
    });
  };

  testCase(table[0], "");
  testCase(table[1], "test.string");
  testCase(table[2], "test.string");
  testCase(table[3], "test.string");
  testCase(table[4], "test.string");
  testCase(table[5], "test.n1");
  testCase(table[6], "test.1.2.3");
  testCase(
    table[7],
    "long.long.long.long.long.long.long.long.long.long.long.long.long.long"
  );
});
