import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import StudentHome from '../screens/StudentHome';
import TeacherHome from '../screens/TeacherHome';
import ParentHome from '../screens/ParentHome';
import GalleryScreen from '../screens/GalleryScreen';
import TimetableMenuScreen from '../screens/TimetableMenuScreen';
import TimetableScreen from '../screens/TimetableScreen';
import CreateMeetingScreen from '../screens/CreateMeetingScreen';
import MeetingViewerScreen from '../screens/MeetingViewerScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import FaceEnrollmentScreen from '../screens/auth/FaceEnrollmentScreen';
import UploadResultScreen from '../screens/UploadResultScreen';
import ViewResultsScreen from '../screens/ViewResultsScreen';
import LibraryScreen from '../screens/LibraryScreen';
import GroupChatScreen from '../screens/GroupChatScreen';
import CreateTeacherGroupScreen from '../screens/CreateTeacherGroupScreen';
import TeacherGroupsScreen from '../screens/TeacherGroupsScreen';
import GroupMembersScreen from '../screens/GroupMembersScreen';
import UploadResourceScreen from '../screens/UploadResourceScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import PDFViewerScreen from '../screens/PDFViewerScreen';
import FaceCaptureScreen from '../screens/FaceCaptureScreen';
import AttendanceScreen from '../screens/AttendenceScreen';
import TakeAttendanceScreen from '../screens/TakeAttendanceScreen';
import ApplyBonafideScreen from '../screens/ApplyBonafideScreen';
import AdminHomeScreen from '../screens/admin/AdminHomeScreen';
import AdminApproveScreen from '../screens/admin/AdminApproveScreen';
import AdminAttendanceScreen from '../screens/admin/AdminAttendanceScreen';
import TeacherRequestsScreen from '../screens/TeacherRequestsScreen';
import TeacherSignatureScreen from '../screens/TeacherSignatureScreen';
import StudentBonafideListScreen from '../screens/StudentBonafideListScreen';
import ApplyLeaveScreen from '../screens/ApplyLeaveScreen';
import TeacherLeaveRequestsScreen from '../screens/TeacherLeaveRequestsScreen';
import StudentLeaveListScreen from '../screens/StudentLeaveListScreen';
import CreateAssignmentScreen from '../screens/CreateAssignmentScreen';
import StudentAssignmentListScreen from '../screens/StudentAssignmentListScreen';
import StudentSettingsScreen from '../screens/StudentSettingsScreen';
import TeacherSettingsScreen from '../screens/TeacherSettingsScreen';
import StudentProfileScreen from '../screens/StudentProfileScreen';
import TeacherProfileScreen from '../screens/TeacherProfileScreen';
import AboutACAMSScreen from '../screens/AboutACAMSScreen';
import TeacherRequestsHubScreen from '../screens/TeacherRequestsHubScreen';
import StudentAttendanceScreen from '../screens/StudentAttendanceScreen';
import TeacherReportsScreen from '../screens/TeacherReportsScreen';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  FaceEnrollment: { userData: any };

  StudentHome: undefined;
  StudentDashboard: undefined;
  StudentProfile: undefined;
  StudentSettings: undefined;
  StudentAttendance: undefined;

  TeacherHome: undefined;
  TeacherDashboard: undefined;
  TeacherProfile: undefined;
  TeacherSettings: undefined;

  ParentHome: undefined;
  AdminHome: undefined;
  AdminAttendance: undefined;
  AdminApprove: undefined;

  Gallery: undefined;
  EventGallery: undefined;
  TimetableMenu: undefined;
  TimetableScreen: undefined;
  CreateMeeting: undefined;
  MeetingViewer: undefined;
  Attendance: undefined;
  TeacherAttendanceSetup: undefined;
  TeacherLiveAttendance: undefined;
  UploadResult: undefined;
  TeacherResults: undefined;
  ViewResults: undefined;
  StudentResults: undefined;
  Library: undefined;
  ELibrary: undefined;
  GroupChat: { groupId: string };
  CreateTeacherGroup: undefined;
  TeacherGroups: undefined;
  ClassGroup: undefined;
  GroupMembers: { groupId: string };
  UploadResource: undefined;
  TeacherResources: undefined;
  Resources: undefined;
  PDFViewer: { fileUrl: string; fileName?: string };
  FaceCapture: undefined;
  TakeAttendance: {
    filters: {
      department: string;
      year: string;
      semester: string;
      subject: string;
    };
  };
  ApplyBonafide: undefined;
  BonafideRequest: undefined;
  TeacherRequests: undefined;
  TeacherRequestsHub: undefined;
  TeacherSignature: undefined;
  BonafideDocument: any;
  StudentBonafideList: undefined;
  MyCertificates: undefined;
  ApplyLeave: undefined;
  TeacherLeaveRequests: undefined;
  StudentLeaveList: undefined;
  MyLeaveRequests: undefined;
  CreateAssignment: undefined;
  TeacherAssignments: undefined;
  StudentAssignments: undefined;
  SubmitAssignment: { id: string; title: string } | any;
  TeacherReports: undefined;
  AboutACAMS: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="FaceEnrollment" component={FaceEnrollmentScreen} />

        <Stack.Screen name="StudentHome" component={StudentHome} />
        <Stack.Screen name="StudentDashboard" component={StudentHome} />
        <Stack.Screen name="StudentProfile" component={StudentProfileScreen} />
        <Stack.Screen name="StudentSettings" component={StudentSettingsScreen} />
        <Stack.Screen name="StudentAttendance" component={StudentAttendanceScreen} />

        <Stack.Screen name="TeacherHome" component={TeacherHome} />
        <Stack.Screen name="TeacherDashboard" component={TeacherHome} />
        <Stack.Screen name="TeacherProfile" component={TeacherProfileScreen} />
        <Stack.Screen name="TeacherSettings" component={TeacherSettingsScreen} />

        <Stack.Screen name="ParentHome" component={ParentHome} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="AdminApprove" component={AdminApproveScreen} />
        <Stack.Screen name="AdminAttendance" component={AdminAttendanceScreen} />

        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="EventGallery" component={GalleryScreen} />
        <Stack.Screen name="TimetableMenu" component={TimetableMenuScreen} />
        <Stack.Screen name="TimetableScreen" component={TimetableScreen} />
        <Stack.Screen name="CreateMeeting" component={CreateMeetingScreen} />
        <Stack.Screen name="MeetingViewer" component={MeetingViewerScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="TeacherAttendanceSetup" component={AttendanceScreen} />
        <Stack.Screen name="TeacherLiveAttendance" component={AttendanceScreen} />
        <Stack.Screen name="TakeAttendance" component={TakeAttendanceScreen} />

        <Stack.Screen name="UploadResult" component={UploadResultScreen} />
        <Stack.Screen name="TeacherResults" component={UploadResultScreen} />
        <Stack.Screen name="ViewResults" component={ViewResultsScreen} />
        <Stack.Screen name="StudentResults" component={ViewResultsScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="ELibrary" component={LibraryScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="UploadResource" component={UploadResourceScreen} />
        <Stack.Screen name="TeacherResources" component={UploadResourceScreen} />
        <Stack.Screen name="PDFViewer" component={PDFViewerScreen} />

        <Stack.Screen name="GroupChat" component={GroupChatScreen} />
        <Stack.Screen name="CreateTeacherGroup" component={CreateTeacherGroupScreen} />
        <Stack.Screen name="TeacherGroups" component={TeacherGroupsScreen} />
        <Stack.Screen name="ClassGroup" component={TeacherGroupsScreen} />
        <Stack.Screen name="GroupMembers" component={GroupMembersScreen} />

        <Stack.Screen name="FaceCapture" component={FaceCaptureScreen} />
        <Stack.Screen name="ApplyBonafide" component={ApplyBonafideScreen} />
        <Stack.Screen name="BonafideRequest" component={ApplyBonafideScreen} />
        <Stack.Screen name="TeacherRequests" component={TeacherRequestsScreen} />
        <Stack.Screen name="TeacherRequestsHub" component={TeacherRequestsHubScreen} />
        <Stack.Screen name="TeacherSignature" component={TeacherSignatureScreen} />
        <Stack.Screen name="StudentBonafideList" component={StudentBonafideListScreen} />
        <Stack.Screen name="MyCertificates" component={StudentBonafideListScreen} />
        <Stack.Screen name="ApplyLeave" component={ApplyLeaveScreen} />
        <Stack.Screen name="TeacherLeaveRequests" component={TeacherLeaveRequestsScreen} />
        <Stack.Screen name="StudentLeaveList" component={StudentLeaveListScreen} />
        <Stack.Screen name="MyLeaveRequests" component={StudentLeaveListScreen} />
        <Stack.Screen name="CreateAssignment" component={CreateAssignmentScreen} />
        <Stack.Screen name="TeacherAssignments" component={CreateAssignmentScreen} />
        <Stack.Screen name="StudentAssignments" component={StudentAssignmentListScreen} />
        <Stack.Screen name="TeacherReports" component={TeacherReportsScreen} />
        <Stack.Screen name="AboutACAMS" component={AboutACAMSScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
