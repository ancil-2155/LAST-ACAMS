const storage = jest.fn(() => ({
  ref: jest.fn(() => ({
    putFile: jest.fn(() => Promise.resolve()),
    getDownloadURL: jest.fn(() => Promise.resolve('https://example.com/profile.jpg')),
  })),
}));

module.exports = storage;
module.exports.default = storage;
