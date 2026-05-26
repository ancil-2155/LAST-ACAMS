const React = require('react');
const { View } = require('react-native');

const SignatureCanvas = React.forwardRef((props, ref) => React.createElement(View, { ...props, ref }));

module.exports = SignatureCanvas;
module.exports.default = SignatureCanvas;
