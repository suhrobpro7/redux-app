// jest.config.mjs
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'mjs', 'cjs'],
  setupFilesAfterEnv: ['./src/setupTests.js'],
};
