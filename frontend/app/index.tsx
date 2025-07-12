import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Bell } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useNotification } from '~/store/store';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldShowBanner: true,
    shouldSetBadge: true,
    shouldShowList: false,
  }),
});

const Homepage = () => {
  const router = useRouter();

  const { fetchNotifications, unreadedNotifications, isLoading } = useNotification();

  // fetching the user's notifications
  useEffect(() => {
    fetchNotifications('user123');
  }, []);

  // Checking the notification permissions
  useEffect(() => {
    const requestPermission = async () => {
      if (Device.isDevice) {
        const { status } = await Notifications.getPermissionsAsync();
        let finalStatus = status;
        if (finalStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
      } else {
        Alert.alert(
          'Notification Permission',
          'Must use a physical device for notification permission'
        );
      }
    };
    requestPermission();
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      {/* App Icon */}
      <View className="mb-4 rounded-full bg-blue-100 p-4">
        <Bell size={40} color="#3b82f6" />
      </View>

      {/* Title */}
      <Text className="mb-2 text-center text-2xl font-bold text-gray-900">
        Welcome to NotifyHub
      </Text>

      {/* Tagline */}
      <Text className="mb-6 text-center text-base text-gray-500">Never miss an update again.</Text>

      {/* Unread Count Display */}
      <View className="mb-6 rounded-xl bg-red-100 px-4 py-2">
        {isLoading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <Text className="font-medium text-red-600">
            Unread Notifications: {unreadedNotifications.length || 0}
          </Text>
        )}
      </View>

      {/* Navigation Button */}
      <TouchableOpacity
        onPress={() => {
          router.push('/notifications');
        }}
        className="rounded-2xl bg-blue-600 px-6 py-3 shadow-md">
        <Text className="text-lg font-semibold text-white md:text-xl">View Notifications</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Homepage;
