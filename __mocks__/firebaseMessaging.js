const messagingInstance = {
  requestPermission: jest.fn(() => Promise.resolve(1)),
  getToken: jest.fn(() => Promise.resolve('test-token')),
  onTokenRefresh: jest.fn(() => jest.fn()),
  setBackgroundMessageHandler: jest.fn(),
  onMessage: jest.fn(() => jest.fn()),
};

const messaging = jest.fn(() => messagingInstance);

messaging.AuthorizationStatus = {
  AUTHORIZED: 1,
  PROVISIONAL: 2,
};

module.exports = messaging;
module.exports.default = messaging;
