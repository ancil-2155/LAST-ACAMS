import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import { dashboardTheme } from '../theme/dashboardTheme';

const formatDate = (value: any) => {
  const date = value?.toDate?.() || (value instanceof Date ? value : null);
  if (!date) {
    return 'Date not available';
  }
  return date.toLocaleDateString();
};

const TeacherReportsScreen = () => {
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('attendance')
      .orderBy('date', 'desc')
      .limit(50)
      .onSnapshot(
        snapshot => {
          setRecords(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
          setError(null);
          setLoading(false);
        },
        err => {
          console.log('Teacher reports load failed:', err);
          setError('Unable to load attendance reports.');
          setLoading(false);
        },
      );

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={dashboardTheme.colors.primary} />
        <Text style={styles.loadingText}>Loading reports...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance Reports</Text>
      <Text style={styles.subtitle}>Recent attendance records from live scanner sessions</Text>

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
              <Icon name="file-chart-outline" size={34} color={dashboardTheme.colors.primary} />
              <Text style={styles.emptyTitle}>No reports yet</Text>
              <Text style={styles.emptyText}>Live attendance records will appear here.</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.recordCard}>
              <View style={styles.recordIcon}>
                <Icon name="account-check-outline" size={24} color={dashboardTheme.colors.success} />
              </View>
              <View style={styles.recordText}>
                <Text style={styles.studentName}>{item.studentName || 'Student'}</Text>
                <Text style={styles.meta}>
                  {item.subject || 'Subject'} - {item.department || '-'} Year {item.year || '-'}
                </Text>
                <Text style={styles.meta}>{formatDate(item.date)}</Text>
              </View>
              <Text style={styles.status}>{item.status || 'Present'}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default TeacherReportsScreen;

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
    lineHeight: 20,
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
  studentName: {
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
