const React = require('react');
const { Text } = require('react-native');

const Icon = ({ name, ...props }) => React.createElement(Text, props, name || 'icon');

module.exports = Icon;
module.exports.default = Icon;
