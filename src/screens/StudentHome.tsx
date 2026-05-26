import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import FeatureGrid from '../components/dashboard/FeatureGrid';
import type { DashboardFeature } from '../config/dashboardFeatures';
import { studentFeatures } from '../config/dashboardFeatures';
import { dashboardTheme } from '../theme/dashboardTheme';

type StudentHomeProps = {
  navigation: any;
};

const StudentHome: React.FC<StudentHomeProps> = ({ navigation }) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadUser = useCallback(async () => {
    const currentUser = auth().currentUser;

    if (!currentUser?.uid) {
      setUserData(null);
      setError('Please sign in again to load your dashboard.');
      setLoading(false);
      return;
    }

    try {
      setError(null);
      const doc = await firestore().collection('users').doc(currentUser.uid).get();
      setUserData({
        uid: currentUser.uid,
        email: currentUser.email,
        ...(doc.data() || {}),
      });
    } catch (err) {
      console.log('Student dashboard user load failed:', err);
      setError('Unable to load your latest dashboard details.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadUser();
    setRefreshing(false);
  };

  const displayName = useMemo(
    () => userData?.name || auth().currentUser?.displayName || 'Student',
    [userData],
  );

  const profilePhotoUrl =
    userData?.profilePhotoUrl ||
    userData?.photoUrl ||
    userData?.photoURL ||
    userData?.faces?.[0] ||
    auth().currentUser?.photoURL ||
    null;

  const localProfilePhotoUri = userData?.localProfilePhotoUri || null;

  const handleFeaturePress = (feature: DashboardFeature) => {
    (navigation.navigate as any)(feature.route);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={dashboardTheme.colors.primary} />
        <Text style={styles.loadingText}>Loading student dashboard...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={dashboardTheme.colors.primary} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={dashboardTheme.colors.primary}
          />
        }
      >
        <DashboardHeader
          role="student"
          userName={displayName}
          subtitle="Welcome back"
          profilePhotoUrl={profilePhotoUrl}
          localProfilePhotoUri={localProfilePhotoUri}
          onProfilePress={() => navigation.navigate('StudentProfile')}
          onSettingsPress={() => navigation.navigate('StudentSettings')}
        />

        <View style={styles.content}>
          {error ? (
            <View style={styles.notice}>
              <Text style={styles.noticeTitle}>Dashboard sync issue</Text>
              <Text style={styles.noticeText}>{error}</Text>
              <TouchableOpacity style={styles.retryButton} onPress={loadUser}>
                <Text style={styles.retryText}>Retry</Text>
              </TouchableOpacity>
            </View>
          ) : null}

          <Text style={styles.sectionTitle}>Student Tools</Text>
          <FeatureGrid features={studentFeatures} onFeaturePress={handleFeaturePress} />
        </View>
      </ScrollView>
    </View>
  );
};

export default StudentHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dashboardTheme.colors.lightBackground,
  },
  content: {
    padding: dashboardTheme.spacing.screenPadding,
    paddingBottom: 28,
  },
  sectionTitle: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 14,
  },
  notice: {
    backgroundColor: '#FFF7ED',
    borderWidth: 1,
    borderColor: '#FED7AA',
    borderRadius: dashboardTheme.spacing.cardRadius,
    padding: 14,
    marginBottom: 16,
  },
  noticeTitle: {
    color: '#9A3412',
    fontSize: 15,
    fontWeight: '800',
  },
  noticeText: {
    color: '#9A3412',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
  },
  retryButton: {
    alignSelf: 'flex-start',
    backgroundColor: dashboardTheme.colors.warning,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 10,
  },
  retryText: {
    color: dashboardTheme.colors.white,
    fontWeight: '800',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: dashboardTheme.colors.lightBackground,
    padding: 24,
  },
  loadingText: {
    color: dashboardTheme.colors.textSecondary,
    marginTop: 12,
    fontSize: 14,
  },
});
