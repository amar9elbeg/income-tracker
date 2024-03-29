/* eslint-disable */
export default {
  displayName: 'scripts',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/scripts',
  collectCoverageFrom: [
    '*.ts',
    '**/*.ts',
    'utils/**/*.ts',
    '!**/models/*.ts',
    '!**.d.ts',
    '!src/config/database.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/generated.ts',
    '!**/generated/*.ts',
    '!**/resolvers/**/*index.ts',
    '!**/resolvers/error.ts',
    '!**/schemas/*.ts',
    '*-schema.ts',
    '!**/*-schema.ts',
    '*.graphql',
    '!*.config.ts',
    '!codegen.ts',
    '!src/pages/api/graphql.ts',
  ],
};
