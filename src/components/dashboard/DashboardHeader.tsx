import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ACAMSLogo from '../common/ACAMSLogo';
import { dashboardTheme } from '../../theme/dashboardTheme';
import ProfileAvatarButton from './ProfileAvatarButton';
import SettingsButton from './SettingsButton';

type DashboardHeaderProps = {
  role: 'student' | 'teacher';
  userName: string;
  subtitle?: string;
  profilePhotoUrl?: string | null;
  localProfilePhotoUri?: string | null;
  onProfilePress: () => void;
  onSettingsPress: () => void;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  role,
  userName,
  subtitle,
  profilePhotoUrl,
  localProfilePhotoUri,
  onProfilePress,
  onSettingsPress,
}) => {
  const roleLabel = role === 'student' ? 'Student' : 'Teacher';
  const defaultSubtitle = role === 'student' ? 'Welcome back' : 'Teacher Dashboard';

  return (
    <LinearGradient
      colors={[dashboardTheme.colors.primary, '#7C3AED']}
      style={styles.header}
    >
      <View style={styles.topRow}>
        <View style={styles.identity}>
          <ACAMSLogo size={50} />
          <View style={styles.titleBlock}>
            <Text style={styles.subtitle} numberOfLines={1}>
              {subtitle || defaultSubtitle}
            </Text>
            <Text style={styles.name} numberOfLines={1}>
              {userName || roleLabel}
            </Text>
            <View style={styles.rolePill}>
              <Text style={styles.roleText}>{roleLabel}</Text>
            </View>
          </View>
        </View>

        <View style={styles.actions}>
          <ProfileAvatarButton
            photoUrl={profilePhotoUrl}
            localPhotoUri={localProfilePhotoUri}
            name={userName}
            onPress={onProfilePress}
          />
          <SettingsButton onPress={onSettingsPress} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: dashboardTheme.spacing.screenPadding,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  identity: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minWidth: 0,
  },
  titleBlock: {
    flex: 1,
    minWidth: 0,
  },
  subtitle: {
    color: '#E0E7FF',
    fontSize: dashboardTheme.typography.subtitle,
    fontWeight: '600',
  },
  name: {
    color: dashboardTheme.colors.white,
    fontSize: dashboardTheme.typography.dashboardTitle,
    fontWeight: '800',
    marginTop: 2,
  },
  rolePill: {
    alignSelf: 'flex-start',
    marginTop: 7,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.22)',
  },
  roleText: {
    color: dashboardTheme.colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
