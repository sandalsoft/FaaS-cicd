import jetpack from 'fs-jetpack';
import path from 'path';

import { TestTable } from '../../test/_test-setup';
import { doMoreStuff } from './do-more-stuff';

const TestSandboxDir = `./test/do-more-stuff`;
const TestDataDir = './test';
const TestDataFile = 'do-more-stuff.table.json';
const TestTable: TestTable = jetpack.read(path.join(TestDataDir, TestDataFile), 'json').testTable;


/* Enable mocking my uncommenting me
const MockDataDir = `./test`;
const MockDataFile = 'do-more-stuff.mock.json';
jest.mock('./do-more-stuff', () =>
  Object.assign(require.requireActual('./do-more-stuff'), {
    doMoreStuff: jest.fn(() => jetpack.read(path.join(MockDataDir, MockDataFile),'json') 
    ) 
  }) 
);
*/


// Table drived testing
test.each(TestTable)('doMoreStuff(%p)', (testValue, expectedValue) => {
  expect(doMoreStuff(testValue)).toEqual(expectedValue);
});



