import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { dashboardTheme } from '../../theme/dashboardTheme';
import type { DashboardFeature } from '../../config/dashboardFeatures';

type FeatureCardProps = {
  feature: DashboardFeature;
  onPress: (feature: DashboardFeature) => void;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onPress }) => {
  const color = feature.color || dashboardTheme.colors.primary;

  return (
    <TouchableOpacity
      activeOpacity={0.82}
      style={styles.card}
      onPress={() => onPress(feature)}
      accessibilityRole="button"
      accessibilityLabel={feature.title}
    >
      <View style={styles.cardTop}>
        <View style={[styles.iconBox, { backgroundColor: `${color}14` }]}>
          <Icon name={feature.iconName} size={dashboardTheme.spacing.iconSize} color={color} />
        </View>
        {typeof feature.badgeCount === 'number' && feature.badgeCount > 0 ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{feature.badgeCount}</Text>
          </View>
        ) : null}
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {feature.title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={2}>
        {feature.subtitle}
      </Text>
    </TouchableOpacity>
  );
};

export default FeatureCard;

const styles = StyleSheet.create({
  card: {
    minHeight: 148,
    borderRadius: dashboardTheme.spacing.cardRadius,
    padding: 16,
    backgroundColor: dashboardTheme.colors.cardBackground,
    borderWidth: 1,
    borderColor: '#EEF2F7',
    justifyContent: 'space-between',
    ...dashboardTheme.shadow,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: dashboardTheme.colors.danger,
  },
  badgeText: {
    color: dashboardTheme.colors.white,
    fontSize: dashboardTheme.typography.badge,
    fontWeight: '800',
  },
  title: {
    color: dashboardTheme.colors.textPrimary,
    fontSize: dashboardTheme.typography.featureTitle,
    fontWeight: '800',
    marginTop: 14,
  },
  subtitle: {
    color: dashboardTheme.colors.textSecondary,
    fontSize: dashboardTheme.typography.subtitle,
    lineHeight: 18,
    marginTop: 4,
  },
});
