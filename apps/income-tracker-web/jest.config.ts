/* eslint-disable */

export default {
  displayName: 'income-tracker-web',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/income-tracker-web',
  collectCoverageFrom: [
    '**/*.tsx',
    'utils/**/*.ts',
    'components/**',
    '!src/common/**/*.tsx',
    '!src/app/**/*.tsx',
    '!specs/**',
    '!**.d.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/generated.ts',
    '!**/generated/*.ts',
    '!*.config.ts',
    '!graphql/*.ts',
    '!graphql/resolvers/index.ts',
  ],
};
