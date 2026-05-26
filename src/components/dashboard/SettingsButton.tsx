import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SettingsButtonProps = {
  onPress: () => void;
  size?: number;
};

const SettingsButton: React.FC<SettingsButtonProps> = ({ onPress, size = 42 }) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel="Open settings"
      activeOpacity={0.78}
      onPress={onPress}
      style={[styles.button, { width: size, height: size, borderRadius: size / 2 }]}
    >
      <Icon name="cog-outline" size={24} color="#FFFFFF" />
    </TouchableOpacity>
  );
};

export default SettingsButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.26)',
  },
});
