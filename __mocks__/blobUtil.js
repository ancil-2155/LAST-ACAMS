module.exports = {
  fs: {
    dirs: {},
    readFile: jest.fn(() => Promise.resolve('')),
  },
  config: jest.fn(() => ({
    fetch: jest.fn(() => Promise.resolve({ path: jest.fn(() => '') })),
  })),
};
