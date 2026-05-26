import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ACAMSLogo from '../components/common/ACAMSLogo';
import { dashboardTheme } from '../theme/dashboardTheme';

const features = [
  'Face-based attendance',
  'Leave and bonafide requests',
  'Assignments and results',
  'Resources and E-Library',
  'Class groups and event gallery',
];

const developers = [
  'Ancil M Cheruvil',
  'Niya Joy',
  'MOHD Muzammil Hasan',
];

const AboutACAMSScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <ACAMSLogo size={96} />
        <Text style={styles.title}>ACAMS</Text>
        <Text style={styles.subtitle}>Automated Classroom Attendance Management System</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Project Purpose</Text>
        <Text style={styles.body}>
          ACAMS helps educational institutions manage attendance, requests,
          learning resources, assignments, results, and communication in one
          secure mobile app.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Features</Text>
        {features.map(item => (
          <View style={styles.listItem} key={item}>
            <Icon name="check-circle-outline" size={19} color={dashboardTheme.colors.success} />
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Developer Team</Text>
        {developers.map(name => (
          <View style={styles.listItem} key={name}>
            <Icon name="account-circle-outline" size={19} color={dashboardTheme.colors.primary} />
            <Text style={styles.listText}>{name}</Text>
          </View>
        ))}
        <Text style={styles.body}>
          Developed by B.Tech Engineering students as an academic project, ACAMS
          focuses on building a practical, secure, and user-friendly solution
          for educational institutions.
        </Text>
      </View>

      <View style={styles.quoteBox}>
        <Icon name="format-quote-open" size={28} color={dashboardTheme.colors.primary} />
        <Text style={styles.quote}>
          "Technology should reduce repetitive work and give teachers more time
          to teach, while giving students a faster and smarter academic
          experience."
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutACAMSScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dashboardTheme.colors.lightBackground,
  },
  content: {
    padding: dashboardTheme.spacing.screenPadding,
    paddingBottom: 32,
  },
  hero: {
    alignItems: 'center',
    paddingVertical: 28,
  },
  title: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 30,
    fontWeight: '900',
    marginTop: 14,
  },
  subtitle: {
    color: dashboardTheme.colors.textSecondary,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 6,
  },
  section: {
    backgroundColor: dashboardTheme.colors.cardBackground,
    borderRadius: dashboardTheme.spacing.cardRadius,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#EEF2F7',
    ...dashboardTheme.shadow,
  },
  sectionTitle: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 10,
  },
  body: {
    color: dashboardTheme.colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 6,
  },
  listText: {
    flex: 1,
    color: dashboardTheme.colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  quoteBox: {
    backgroundColor: '#EEF2FF',
    borderRadius: dashboardTheme.spacing.cardRadius,
    padding: 16,
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  quote: {
    color: dashboardTheme.colors.primaryDark,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    marginTop: 4,
  },
});
