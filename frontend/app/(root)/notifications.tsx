import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { NotificationItem } from '~/components/NotificationItems';
import { INotification } from '~/types';

const dummyNotifications: INotification[] = [
  {
    _id: '1',
    title: 'New Message from Admin',
    body: 'Your report has been approved.',
    type: 'default',
    recipient: 'user123',
    isRead: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
  },
  {
    _id: '2',
    title: 'Update Available',
    body: 'A new version of the app is available to download.',
    type: 'default',
    recipient: 'user123',
    isRead: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    _id: '3',
    title: 'Security Notice',
    body: 'Unusual login detected in your account.',
    type: 'form_action',
    recipient: 'user123',
    isRead: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
  },
];

const NotificationScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <FlatList
        className="w-full flex-1"
        data={dummyNotifications}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <NotificationItem key={item._id} item={item} />}
        ListEmptyComponent={
          <View className="mt-12 flex-1 items-center justify-center">
            <Text className="text-lg text-gray-400">No notifications found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
