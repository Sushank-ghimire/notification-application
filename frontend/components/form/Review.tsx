import { View, Text } from 'react-native';
import { useMultistepForm } from '~/store/store';

export const Step3Review = () => {
  const { data } = useMultistepForm();

  return (
    <View className="w-full space-y-8 px-4">
      <View className="items-center">
        <Text className="text-center text-2xl font-bold text-gray-800">
          Review Your Information
        </Text>
        <Text className="text-center text-gray-500">
          Please confirm your details before submission
        </Text>
      </View>

      <View className="space-y-4 rounded-2xl bg-white p-6 shadow-lg">
        <View className="flex-row items-center justify-between border-b border-gray-100 pb-3">
          <View className="flex-row items-center space-x-2">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-blue-50">
              <Text className="text-blue-500">👤</Text>
            </View>
            <Text className="font-medium text-gray-600">Username</Text>
          </View>
          <Text className="font-semibold text-gray-900">{data.username}</Text>
        </View>

        <View className="flex-row items-center justify-between border-b border-gray-100 pb-3">
          <View className="flex-row items-center space-x-2">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-purple-50">
              <Text className="text-purple-500">📧</Text>
            </View>
            <Text className="font-medium text-gray-600">Email</Text>
          </View>
          <Text className="font-semibold text-gray-900">{data.email}</Text>
        </View>

        <View className="flex-row items-center justify-between border-b border-gray-100 pb-3">
          <View className="flex-row items-center space-x-2">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-green-50">
              <Text className="text-green-500">🌍</Text>
            </View>
            <Text className="font-medium text-gray-600">Country</Text>
          </View>
          <Text className="font-semibold text-gray-900">{data.country}</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-2">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-pink-50">
              <Text className="text-pink-500">⚧</Text>
            </View>
            <Text className="font-medium text-gray-600">Gender</Text>
          </View>
          <Text className="font-semibold text-gray-900">{data.gender}</Text>
        </View>
      </View>

      <View className="rounded-2xl bg-indigo-50 p-4">
        <Text className="text-center text-indigo-800">
          All set! Tap "Submit" to complete your registration.
        </Text>
      </View>
    </View>
  );
};
