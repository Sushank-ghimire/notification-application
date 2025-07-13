import { useState } from 'react';
import { FlatList, SafeAreaView, Text, View, RefreshControl } from 'react-native';
import { NotificationItem } from '~/components/NotificationItems';
import { useNotification } from '~/store/store';

const NotificationScreen = () => {
  const { notifications, fetchNotifications } = useNotification();

  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    try {
      fetchNotifications('user123');
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <FlatList
        className="w-full flex-1"
        refreshing={refreshing}
        onRefresh={handleRefresh}
        refreshControl={<RefreshControl refreshing={refreshing} />}
        data={notifications}
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
