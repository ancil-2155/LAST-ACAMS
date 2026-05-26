import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ProfileAvatarButton from '../components/dashboard/ProfileAvatarButton';
import { dashboardTheme } from '../theme/dashboardTheme';

const InfoRow = ({ label, value }: { label: string; value?: string | null }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value || '-'}</Text>
  </View>
);

const StudentProfileScreen = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const uid = auth().currentUser?.uid;
    if (!uid) {
      setLoading(false);
      return;
    }

    const unsubscribe = firestore()
      .collection('users')
      .doc(uid)
      .onSnapshot(
        doc => {
          setUserData({ uid, email: auth().currentUser?.email, ...(doc.data() || {}) });
          setLoading(false);
        },
        error => {
          console.log('Student profile load failed:', error);
          setLoading(false);
        },
      );

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={dashboardTheme.colors.primary} />
      </View>
    );
  }

  const name = userData?.name || auth().currentUser?.displayName || 'Student';
  const photoUrl =
    userData?.profilePhotoUrl ||
    userData?.photoUrl ||
    userData?.photoURL ||
    userData?.faces?.[0] ||
    auth().currentUser?.photoURL ||
    null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.profileCard}>
        <ProfileAvatarButton photoUrl={photoUrl} name={name} size={92} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>Student</Text>
      </View>

      <View style={styles.detailsCard}>
        <InfoRow label="Email" value={userData?.email || auth().currentUser?.email} />
        <InfoRow label="Department" value={userData?.department} />
        <InfoRow label="Year" value={userData?.year} />
        <InfoRow label="Roll Number" value={userData?.rollNo} />
        <InfoRow
          label="Face Enrollment"
          value={userData?.faceEnrollmentStatus ? 'Completed' : 'Not completed'}
        />
      </View>
    </ScrollView>
  );
};

export default StudentProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dashboardTheme.colors.lightBackground,
  },
  content: {
    padding: dashboardTheme.spacing.screenPadding,
    paddingBottom: 32,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: dashboardTheme.colors.lightBackground,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: dashboardTheme.colors.cardBackground,
    borderRadius: dashboardTheme.spacing.cardRadius,
    padding: 22,
    borderWidth: 1,
    borderColor: '#EEF2F7',
    ...dashboardTheme.shadow,
  },
  name: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 22,
    fontWeight: '900',
    marginTop: 14,
    textAlign: 'center',
  },
  role: {
    color: dashboardTheme.colors.primary,
    fontSize: 13,
    fontWeight: '800',
    marginTop: 4,
  },
  detailsCard: {
    backgroundColor: dashboardTheme.colors.cardBackground,
    borderRadius: dashboardTheme.spacing.cardRadius,
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#EEF2F7',
    ...dashboardTheme.shadow,
  },
  infoRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  label: {
    color: dashboardTheme.colors.textSecondary,
    fontSize: 12,
    fontWeight: '700',
  },
  value: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 15,
    fontWeight: '700',
    marginTop: 4,
  },
});
