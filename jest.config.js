module.exports = {
  moduleNameMapper: {
    '^Util(.*)$': '<rootDir>/src/util$1',
    '^Config(.*)$': '<rootDir>/src/config$1',
    '^Types(.*)$': '<rootDir>/src/types$1'
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  // collectCoverage: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./test/_test-setup.ts']
};
