import { Text, View, TouchableOpacity } from 'react-native';
import { Bell, CheckCircle2 } from 'lucide-react-native';
import { INotification } from '~/types';
import { useRouter } from 'expo-router';
import { useNotification } from '~/store/store';

interface INotificationItemsProps {
  item: INotification;
}

export const NotificationItem = ({ item }: INotificationItemsProps) => {
  const { markAsRead } = useNotification();
  const router = useRouter();
  const handlePress = () => {
    markAsRead(item._id);
    router.push('/modal');
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`w-full border-b border-gray-100 px-4 py-3 ${
        !item.isRead ? 'border-l-4 border-blue-500 bg-blue-50' : 'bg-white'
      }`}>
      <View className="flex-row items-start justify-center gap-4">
        <View className="rounded-full bg-blue-100 p-2">
          <Bell size={20} color="#3b82f6" />
        </View>

        <View className="w-full flex-1">
          <View className="flex-row items-center justify-between">
            <Text className={`text-lg font-semibold `}>{item.title}</Text>

            {item.isRead && <CheckCircle2 size={16} color="#6b7280" />}
          </View>

          <Text className="mt-1 text-sm text-gray-600" numberOfLines={2}>
            {item.body}
          </Text>

          <Text className="mt-1 text-xs text-gray-400">
            {new Date(item.createdAt).toLocaleString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
