const React = require('react');
const { View } = require('react-native');

const Camera = React.forwardRef((props, ref) => React.createElement(View, { ...props, ref }));

module.exports = {
  Camera,
  useCameraDevice: jest.fn(() => ({ id: 'front-camera' })),
  useCameraPermission: jest.fn(() => ({
    hasPermission: true,
    requestPermission: jest.fn(() => Promise.resolve(true)),
  })),
  usePhotoOutput: jest.fn(() => ({
    capturePhotoToFile: jest.fn(() => Promise.resolve({ filePath: 'test-photo.jpg' })),
  })),
};
