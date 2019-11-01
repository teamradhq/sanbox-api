module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.test.[jt]s?(x)',
  ],
};
