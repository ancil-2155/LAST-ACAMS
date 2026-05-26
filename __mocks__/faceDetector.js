module.exports = {
  useFaceDetector: jest.fn(() => ({
    detectFaces: jest.fn(() => []),
  })),
};
