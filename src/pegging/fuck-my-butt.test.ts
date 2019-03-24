import jetpack from 'fs-jetpack';
import path from 'path';

import { TestTable } from '../../test/_test-setup';
import { fuckMyButt } from './fuck-my-butt';

const TestSandboxDir = `./test/fuck-my-butt`;
const TestDataDir = `./test`;
const TestDataFile = `fuck-my-butt.table.json`;
const TestTable: TestTable = jetpack.read(path.join(TestDataDir, TestDataFile), `json`).testTable;


/* Enable mocking my uncommenting me
const MockDataDir = `./test`;
const MockDataFile = 'fuck-my-butt.mock.json';
jest.mock('./fuck-my-butt', () =>
  Object.assign(require.requireActual('./fuck-my-butt'), {
    fuckMyButt: jest.fn(() => jetpack.read(path.join(MockDataDir, MockDataFile),'json') 
    ) 
  }) 
);
*/


// Table drived testing
test.each(TestTable)(`fuckMyButt(%p)`, (testValue, expectedValue) => {
  expect(fuckMyButt(testValue)).toEqual(expectedValue);
});



