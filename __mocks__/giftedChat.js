const React = require('react');
const { View } = require('react-native');

const Component = props => React.createElement(View, props);

module.exports = {
  GiftedChat: Component,
  Bubble: Component,
  Actions: Component,
  Send: Component,
};
