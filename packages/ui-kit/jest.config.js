const fs = require('fs');
const swcConfig = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

module.exports = {
    transformIgnorePatterns: ['node_modules', '^.+\\.module\\.(css|sass|scss)$'],
    moduleFileExtensions: ['tsx', 'ts', 'web.js', 'js', 'web.ts', 'web.tsx', 'json', 'web.jsx', 'jsx', 'node'],
    verbose: true,
    moduleNameMapper: {
        '^.+\\.(svg|png|jpg|jpeg|webp|woff|woff2|ttf)$': '<rootDir>/tests/__mocks__/file-mock.js',
        '^.+\\.(css)$': '<rootDir>/tests/__mocks__/file-mock.js',
        '@/(.*)': '<rootDir>/src/$1',
        '@tests': '<rootDir>/src/tests/',
        '@tests/(.*)': '<rootDir>/src/tests/$1',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/tests/setup-tests.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!./src/**/*.stories.{tsx,ts}',
        '!./src/**/*.stub.{tsx,ts}',
        '!./src/**/index.ts',
        '!./src/**/*.d.ts',
        '!src/mocks/**',
    ],
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest', { ...swcConfig }],
    },
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
