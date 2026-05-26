export const dashboardTheme = {
  colors: {
    primary: '#4F46E5',
    primaryDark: '#3730A3',
    dark: '#111827',
    lightBackground: '#F8FAFC',
    cardBackground: '#FFFFFF',
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    white: '#FFFFFF',
  },
  spacing: {
    screenPadding: 16,
    cardGap: 12,
    cardRadius: 18,
    iconSize: 26,
  },
  typography: {
    dashboardTitle: 24,
    featureTitle: 16,
    subtitle: 13,
    badge: 11,
  },
  shadow: {
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
};

export type DashboardTheme = typeof dashboardTheme;
