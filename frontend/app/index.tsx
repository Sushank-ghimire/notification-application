import { View, Text, TouchableOpacity } from 'react-native';
import { Bell } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Homepage = () => {
  const unreadCount = 3;

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
        <Text className="font-medium text-red-600">Unread Notifications: {unreadCount}</Text>
      </View>

      {/* Navigation Button */}
      <TouchableOpacity className="rounded-2xl bg-blue-600 px-6 py-3 shadow-md">
        <Text className="text-lg font-semibold text-white md:text-xl">View Notifications</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Homepage;
