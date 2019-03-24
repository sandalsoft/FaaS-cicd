export type TestInput = any;
export type TestExpected = any;
export type TestTable = any[][];

export interface TestFixture {
  input: TestInput;
  expected: TestExpected;
  testTable: TestTable;
}

// Add setup code and more types needed for testing here