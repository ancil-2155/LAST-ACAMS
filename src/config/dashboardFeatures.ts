import { dashboardTheme } from '../theme/dashboardTheme';

export type DashboardFeature = {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  route: string;
  badgeCount?: number;
  color?: string;
};

export const studentFeatures: DashboardFeature[] = [
  {
    id: 'attendance',
    title: 'Attendance',
    subtitle: 'View your attendance records',
    iconName: 'clipboard-check-outline',
    route: 'StudentAttendance',
    color: dashboardTheme.colors.primary,
  },
  {
    id: 'apply-leave',
    title: 'Apply Leave',
    subtitle: 'Submit a new leave request',
    iconName: 'calendar-plus',
    route: 'ApplyLeave',
    color: dashboardTheme.colors.warning,
  },
  {
    id: 'leave-requests',
    title: 'My Leave Requests',
    subtitle: 'Track submitted leave requests',
    iconName: 'calendar-text',
    route: 'MyLeaveRequests',
    color: dashboardTheme.colors.success,
  },
  {
    id: 'bonafide',
    title: 'Bonafide Certificate',
    subtitle: 'Request a bonafide certificate',
    iconName: 'file-certificate-outline',
    route: 'BonafideRequest',
    color: '#8B5CF6',
  },
  {
    id: 'certificates',
    title: 'My Certificates',
    subtitle: 'View generated documents',
    iconName: 'file-document-check-outline',
    route: 'MyCertificates',
    color: '#0EA5E9',
  },
  {
    id: 'results',
    title: 'Results',
    subtitle: 'Check published marks',
    iconName: 'chart-box-outline',
    route: 'StudentResults',
    color: '#EC4899',
  },
  {
    id: 'assignments',
    title: 'Assignments',
    subtitle: 'View and submit class work',
    iconName: 'book-edit-outline',
    route: 'StudentAssignments',
    color: '#F97316',
  },
  {
    id: 'resources',
    title: 'Resources / E-Library',
    subtitle: 'Open study files and library',
    iconName: 'book-open-page-variant-outline',
    route: 'Resources',
    color: '#14B8A6',
  },
  {
    id: 'gallery',
    title: 'Event Gallery',
    subtitle: 'Browse campus event photos',
    iconName: 'image-multiple-outline',
    route: 'EventGallery',
    color: '#6366F1',
  },
  {
    id: 'class-group',
    title: 'Class Group',
    subtitle: 'Open class chat groups',
    iconName: 'account-group-outline',
    route: 'ClassGroup',
    color: '#0891B2',
  },
];

export const teacherFeatures: DashboardFeature[] = [
  {
    id: 'take-attendance',
    title: 'Take Attendance',
    subtitle: 'Start live face attendance',
    iconName: 'camera-account',
    route: 'TeacherAttendanceSetup',
    color: dashboardTheme.colors.primary,
  },
  {
    id: 'requests-hub',
    title: 'Requests Hub',
    subtitle: 'Bonafide and leave requests',
    iconName: 'inbox-full-outline',
    route: 'TeacherRequestsHub',
    color: dashboardTheme.colors.success,
  },
  {
    id: 'assignments',
    title: 'Assignments',
    subtitle: 'Create and manage tasks',
    iconName: 'book-edit-outline',
    route: 'TeacherAssignments',
    color: dashboardTheme.colors.warning,
  },
  {
    id: 'resources',
    title: 'Resources / E-Library',
    subtitle: 'Upload learning materials',
    iconName: 'cloud-upload-outline',
    route: 'TeacherResources',
    color: '#14B8A6',
  },
  {
    id: 'upload-results',
    title: 'Upload Results',
    subtitle: 'Publish student marks',
    iconName: 'chart-box-plus-outline',
    route: 'TeacherResults',
    color: '#EC4899',
  },
  {
    id: 'class-groups',
    title: 'Class Groups',
    subtitle: 'Open group chats',
    iconName: 'account-group-outline',
    route: 'ClassGroup',
    color: '#0891B2',
  },
  {
    id: 'event-gallery',
    title: 'Event Gallery',
    subtitle: 'View campus events',
    iconName: 'image-multiple-outline',
    route: 'EventGallery',
    color: '#6366F1',
  },
  {
    id: 'signature',
    title: 'My Signature',
    subtitle: 'Manage approval signature',
    iconName: 'draw-pen',
    route: 'TeacherSignature',
    color: '#8B5CF6',
  },
  {
    id: 'reports',
    title: 'Reports',
    subtitle: 'Review attendance records',
    iconName: 'file-chart-outline',
    route: 'TeacherReports',
    color: '#0EA5E9',
  },
];
