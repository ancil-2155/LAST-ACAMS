const authInstance = {
  currentUser: null,
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: 'test-user' } })),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: 'test-user' } })),
  sendPasswordResetEmail: jest.fn(() => Promise.resolve()),
  signOut: jest.fn(() => Promise.resolve()),
};

const auth = jest.fn(() => authInstance);

module.exports = auth;
module.exports.default = auth;
