import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { dashboardTheme } from '../../theme/dashboardTheme';
import type { DashboardFeature } from '../../config/dashboardFeatures';
import FeatureCard from './FeatureCard';

type FeatureGridProps = {
  features: DashboardFeature[];
  onFeaturePress: (feature: DashboardFeature) => void;
};

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, onFeaturePress }) => {
  return (
    <FlatList
      data={features}
      keyExtractor={item => item.route}
      numColumns={2}
      scrollEnabled={false}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <FeatureCard feature={item} onPress={onFeaturePress} />
        </View>
      )}
    />
  );
};

export default FeatureGrid;

const styles = StyleSheet.create({
  content: {
    gap: dashboardTheme.spacing.cardGap,
  },
  row: {
    justifyContent: 'space-between',
    gap: dashboardTheme.spacing.cardGap,
  },
  item: {
    width: '48.2%',
  },
});
