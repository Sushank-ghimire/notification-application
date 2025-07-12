import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { NotificationItem } from '~/components/NotificationItems';
import { useNotification } from '~/store/store';

const NotificationScreen = () => {
  const { notifications } = useNotification();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <FlatList
        className="w-full flex-1"
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
