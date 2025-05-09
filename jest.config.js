// jest.config.js
const nextJest = require('next/jest');

/** Chemin vers ton dossier où se trouve next.config.ts/js */
const createJestConfig = nextJest({ dir: './' });

/** Configuration Jest customisée */
const customJestConfig = {
  preset: undefined,                   // on laisse Next gérer le preset
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

/** Export de la config transformée par next/jest */
module.exports = createJestConfig(customJestConfig);
