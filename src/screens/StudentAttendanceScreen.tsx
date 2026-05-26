import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { dashboardTheme } from '../theme/dashboardTheme';

const formatDate = (value: any) => {
  const date = value?.toDate?.() || (value instanceof Date ? value : null);
  if (!date) {
    return 'Date not available';
  }
  return date.toLocaleDateString();
};

const StudentAttendanceScreen = () => {
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const uid = auth().currentUser?.uid;
    if (!uid) {
      setError('Please sign in again to view attendance.');
      setLoading(false);
      return;
    }

    const unsubscribe = firestore()
      .collection('attendance')
      .where('studentId', '==', uid)
      .onSnapshot(
        snapshot => {
          const list = snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .sort((a: any, b: any) => {
              const aDate = a.date?.toDate?.()?.getTime?.() || 0;
              const bDate = b.date?.toDate?.()?.getTime?.() || 0;
              return bDate - aDate;
            });

          setRecords(list);
          setError(null);
          setLoading(false);
        },
        err => {
          console.log('Student attendance load failed:', err);
          setError('Unable to load attendance records.');
          setLoading(false);
        },
      );

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={dashboardTheme.colors.primary} />
        <Text style={styles.loadingText}>Loading attendance...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
      <Text style={styles.subtitle}>Your latest marked attendance records</Text>

      {error ? (
        <View style={styles.emptyState}>
          <Icon name="alert-circle-outline" size={34} color={dashboardTheme.colors.warning} />
          <Text style={styles.emptyTitle}>Unable to sync</Text>
          <Text style={styles.emptyText}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={records}
          keyExtractor={item => item.id}
          contentContainerStyle={records.length === 0 ? styles.emptyList : styles.list}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Icon name="clipboard-text-off-outline" size={34} color={dashboardTheme.colors.primary} />
              <Text style={styles.emptyTitle}>No attendance yet</Text>
              <Text style={styles.emptyText}>Marked attendance will appear here.</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.recordCard}>
              <View style={styles.recordIcon}>
                <Icon name="check-circle-outline" size={24} color={dashboardTheme.colors.success} />
              </View>
              <View style={styles.recordText}>
                <Text style={styles.subject}>{item.subject || 'Attendance'}</Text>
                <Text style={styles.meta}>
                  {item.department || '-'} Year {item.year || '-'} - {formatDate(item.date)}
                </Text>
              </View>
              <Text style={styles.status}>{item.status || 'Present'}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default StudentAttendanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dashboardTheme.colors.lightBackground,
    padding: dashboardTheme.spacing.screenPadding,
  },
  title: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 26,
    fontWeight: '900',
    marginTop: 14,
  },
  subtitle: {
    color: dashboardTheme.colors.textSecondary,
    fontSize: 14,
    marginTop: 4,
    marginBottom: 16,
  },
  list: {
    paddingBottom: 24,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  recordCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: dashboardTheme.colors.cardBackground,
    borderRadius: dashboardTheme.spacing.cardRadius,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EEF2F7',
    ...dashboardTheme.shadow,
  },
  recordIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  recordText: {
    flex: 1,
    minWidth: 0,
  },
  subject: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 15,
    fontWeight: '900',
  },
  meta: {
    color: dashboardTheme.colors.textSecondary,
    fontSize: 12,
    marginTop: 3,
  },
  status: {
    color: dashboardTheme.colors.success,
    fontSize: 12,
    fontWeight: '900',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emptyTitle: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 17,
    fontWeight: '900',
    marginTop: 10,
  },
  emptyText: {
    color: dashboardTheme.colors.textSecondary,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
    marginTop: 4,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: dashboardTheme.colors.lightBackground,
  },
  loadingText: {
    color: dashboardTheme.colors.textSecondary,
    marginTop: 12,
  },
});
