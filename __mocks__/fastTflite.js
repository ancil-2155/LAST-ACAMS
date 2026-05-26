module.exports = {
  loadTensorflowModel: jest.fn(() =>
    Promise.resolve({
      run: jest.fn(() => [new Float32Array(128)]),
    }),
  ),
};
