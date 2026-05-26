module.exports = {
  pick: jest.fn(() => Promise.resolve([])),
  types: { allFiles: '*/*', pdf: 'application/pdf', images: 'image/*' },
  isErrorWithCode: jest.fn(() => false),
  errorCodes: { OPERATION_CANCELED: 'OPERATION_CANCELED' },
};
