const emptySnapshot = {
  docs: [],
  empty: true,
};

const docSnapshot = {
  exists: false,
  data: () => undefined,
};

const docRef = {
  get: jest.fn(() => Promise.resolve(docSnapshot)),
  set: jest.fn(() => Promise.resolve()),
  update: jest.fn(() => Promise.resolve()),
  onSnapshot: jest.fn((next, _error) => {
    if (typeof next === 'function') {
      next(docSnapshot);
    }
    return jest.fn();
  }),
};

const queryRef = {
  doc: jest.fn(() => docRef),
  where: jest.fn(() => queryRef),
  orderBy: jest.fn(() => queryRef),
  limit: jest.fn(() => queryRef),
  get: jest.fn(() => Promise.resolve(emptySnapshot)),
  add: jest.fn(() => Promise.resolve({ id: 'test-doc' })),
  onSnapshot: jest.fn((next, _error) => {
    if (typeof next === 'function') {
      next(emptySnapshot);
    }
    return jest.fn();
  }),
};

const firestore = jest.fn(() => ({
  collection: jest.fn(() => queryRef),
}));

firestore.FieldValue = {
  serverTimestamp: jest.fn(() => new Date()),
};

module.exports = firestore;
module.exports.default = firestore;
