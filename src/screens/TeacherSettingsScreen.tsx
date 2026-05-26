import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import ACAMSLogo from '../components/common/ACAMSLogo';
import { dashboardTheme } from '../theme/dashboardTheme';

type SettingsRowProps = {
  iconName: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  rightElement?: React.ReactNode;
};

const SettingsRow: React.FC<SettingsRowProps> = ({
  iconName,
  title,
  subtitle,
  onPress,
  rightElement,
}) => (
  <TouchableOpacity
    style={styles.row}
    onPress={onPress}
    activeOpacity={onPress ? 0.75 : 1}
    disabled={!onPress}
  >
    <View style={styles.rowIcon}>
      <Icon name={iconName} size={22} color={dashboardTheme.colors.primary} />
    </View>
    <View style={styles.rowText}>
      <Text style={styles.rowTitle}>{title}</Text>
      {subtitle ? <Text style={styles.rowSubtitle}>{subtitle}</Text> : null}
    </View>
    {rightElement || (onPress ? <Icon name="chevron-right" size={24} color="#9CA3AF" /> : null)}
  </TouchableOpacity>
);

const TeacherSettingsScreen = ({ navigation }: any) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleChangePassword = async () => {
    const email = auth().currentUser?.email;
    if (!email) {
      Alert.alert('Change Password', 'No email address is available for this account.');
      return;
    }

    await auth().sendPasswordResetEmail(email);
    Alert.alert('Change Password', `A password reset link was sent to ${email}.`);
  };

  const handleLogout = async () => {
    await auth().signOut();
    navigation.replace('Login');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <ACAMSLogo size={62} />
        <View style={styles.headerText}>
          <Text style={styles.title}>Teacher Settings</Text>
          <Text style={styles.subtitle}>Manage teaching tools and account access</Text>
        </View>
      </View>

      <View style={styles.card}>
        <SettingsRow
          iconName="account-outline"
          title="View Profile"
          subtitle="Open teacher profile details"
          onPress={() => navigation.navigate('TeacherProfile')}
        />
        <SettingsRow
          iconName="draw-pen"
          title="My Signature"
          subtitle="Manage approval signature"
          onPress={() => navigation.navigate('TeacherSignature')}
        />
        <SettingsRow
          iconName="lock-reset"
          title="Change Password"
          subtitle="Send a Firebase reset link"
          onPress={handleChangePassword}
        />
        <SettingsRow
          iconName="bell-outline"
          title="Notifications"
          subtitle="Keep request and class alerts enabled"
          rightElement={
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ true: '#C7D2FE', false: '#E5E7EB' }}
              thumbColor={notificationsEnabled ? dashboardTheme.colors.primary : '#F9FAFB'}
            />
          }
        />
        <SettingsRow
          iconName="shield-lock-outline"
          title="Privacy & Security"
          subtitle="Firebase Auth and Firestore protect account data"
          onPress={() =>
            Alert.alert(
              'Privacy & Security',
              'ACAMS uses Firebase Authentication for sign-in and secure Firestore rules for academic data access.',
            )
          }
        />
        <SettingsRow
          iconName="information-outline"
          title="About ACAMS"
          subtitle="Project purpose and developer team"
          onPress={() => navigation.navigate('AboutACAMS')}
        />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.82}>
        <Icon name="logout" size={20} color={dashboardTheme.colors.white} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TeacherSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dashboardTheme.colors.lightBackground,
  },
  content: {
    padding: dashboardTheme.spacing.screenPadding,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingTop: 16,
    paddingBottom: 18,
  },
  headerText: {
    flex: 1,
  },
  title: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 24,
    fontWeight: '900',
  },
  subtitle: {
    color: dashboardTheme.colors.textSecondary,
    fontSize: 13,
    marginTop: 3,
  },
  card: {
    backgroundColor: dashboardTheme.colors.cardBackground,
    borderRadius: dashboardTheme.spacing.cardRadius,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#EEF2F7',
    ...dashboardTheme.shadow,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 13,
    gap: 12,
  },
  rowIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF2FF',
  },
  rowText: {
    flex: 1,
    minWidth: 0,
  },
  rowTitle: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 15,
    fontWeight: '800',
  },
  rowSubtitle: {
    color: dashboardTheme.colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  logoutButton: {
    marginTop: 18,
    backgroundColor: dashboardTheme.colors.danger,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  logoutText: {
    color: dashboardTheme.colors.white,
    fontWeight: '900',
    fontSize: 15,
  },
});
