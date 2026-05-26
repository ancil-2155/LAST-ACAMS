import React, { useEffect, useMemo, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { dashboardTheme } from '../../theme/dashboardTheme';

type ProfileAvatarButtonProps = {
  photoUrl?: string | null;
  localPhotoUri?: string | null;
  name?: string | null;
  size?: number;
  onPress?: () => void;
};

const getInitials = (name?: string | null) => {
  if (!name) {
    return 'A';
  }

  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return 'A';
  }

  return parts
    .slice(0, 2)
    .map(part => part.charAt(0).toUpperCase())
    .join('');
};

const ProfileAvatarButton: React.FC<ProfileAvatarButtonProps> = ({
  photoUrl,
  localPhotoUri,
  name,
  size = 42,
  onPress,
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const sourceUri = photoUrl || localPhotoUri || null;
  const initials = useMemo(() => getInitials(name), [name]);

  useEffect(() => {
    setImageFailed(false);
  }, [sourceUri]);

  const content = sourceUri && !imageFailed ? (
    <Image
      source={{ uri: sourceUri }}
      style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
      onError={() => setImageFailed(true)}
      resizeMode="cover"
    />
  ) : (
    <View style={[styles.fallback, { width: size, height: size, borderRadius: size / 2 }]}>
      <Text style={[styles.initials, { fontSize: Math.max(12, size * 0.34) }]}>
        {initials}
      </Text>
    </View>
  );

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel="Open profile"
      activeOpacity={0.78}
      onPress={onPress}
      style={[styles.button, { width: size, height: size, borderRadius: size / 2 }]}
    >
      {content}
    </TouchableOpacity>
  );
};

export default ProfileAvatarButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    overflow: 'hidden',
  },
  image: {
    backgroundColor: dashboardTheme.colors.border,
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  initials: {
    color: dashboardTheme.colors.primary,
    fontWeight: '800',
  },
});
