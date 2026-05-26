import React from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

const ACAMS_LOGO = require('../../assets/images/acams_icon.jpg');

type ACAMSLogoProps = {
  size?: number;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const ACAMSLogo: React.FC<ACAMSLogoProps> = ({
  size = 48,
  imageStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size * 0.24 }, containerStyle]}>
      <Image
        source={ACAMS_LOGO}
        style={[styles.image, imageStyle]}
        resizeMode="contain"
      />
    </View>
  );
};

export default ACAMSLogo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
