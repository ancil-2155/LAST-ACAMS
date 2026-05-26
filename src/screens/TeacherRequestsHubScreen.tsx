import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { dashboardTheme } from '../theme/dashboardTheme';

const TeacherRequestsHubScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Requests Hub</Text>
      <Text style={styles.subtitle}>Review and approve student requests from one place.</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('TeacherRequests')}
        activeOpacity={0.82}
      >
        <View style={styles.iconBox}>
          <Icon name="file-certificate-outline" size={28} color={dashboardTheme.colors.primary} />
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.cardTitle}>Bonafide Requests</Text>
          <Text style={styles.cardSubtitle}>Approve certificate applications</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#9CA3AF" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('TeacherLeaveRequests')}
        activeOpacity={0.82}
      >
        <View style={styles.iconBox}>
          <Icon name="calendar-text" size={28} color={dashboardTheme.colors.success} />
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.cardTitle}>Leave Requests</Text>
          <Text style={styles.cardSubtitle}>Manage student leave applications</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#9CA3AF" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TeacherRequestsHubScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dashboardTheme.colors.lightBackground,
  },
  content: {
    padding: dashboardTheme.spacing.screenPadding,
    paddingBottom: 32,
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
    marginBottom: 18,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: dashboardTheme.colors.cardBackground,
    borderRadius: dashboardTheme.spacing.cardRadius,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EEF2F7',
    ...dashboardTheme.shadow,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF2FF',
    marginRight: 14,
  },
  textBlock: {
    flex: 1,
  },
  cardTitle: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '900',
  },
  cardSubtitle: {
    color: dashboardTheme.colors.textSecondary,
    fontSize: 13,
    marginTop: 3,
  },
});
