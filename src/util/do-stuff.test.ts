import jetpack from 'fs-jetpack';
import path from 'path';

import { TestTable } from '../../test/_test-setup';
import { doStuff } from './do-stuff';

const TestSandboxDir = `./test/do-stuff`;
const TestDataDir = './test';
const TestDataFile = 'do-stuff.table.json';
const TestTable: TestTable = jetpack.read(path.join(TestDataDir, TestDataFile), 'json').testTable;


/* Enable mocking my uncommenting me
const MockDataDir = `./test`;
const MockDataFile = 'do-stuff.mock.json';
jest.mock('./do-stuff', () =>
  Object.assign(require.requireActual('./do-stuff'), {
    doStuff: jest.fn(() => jetpack.read(path.join(MockDataDir, MockDataFile),'json') 
    ) 
  }) 
);
*/


// Table drived testing
test.each(TestTable)('doStuff(%p)', (testValue, expectedValue) => {
  expect(doStuff(testValue)).toEqual(expectedValue);
});



