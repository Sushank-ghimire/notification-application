import { TextInput, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useMultistepForm } from '~/store/store';

const UserInfo = () => {
  const { data, setData } = useMultistepForm();

  const usernameBorder = useSharedValue(1);
  const emailBorder = useSharedValue(1);
  const passwordBorder = useSharedValue(1);

  const animatedStyle = (border: typeof usernameBorder) =>
    useAnimatedStyle(() => ({
      borderColor: border.value === 1 ? '#d1d5db' : '#3b82f6',
      borderWidth: withTiming(border.value === 1 ? 1 : 2, { duration: 200 }),
    }));

  return (
    <View className="w-full gap-4">
      {/* Username */}
      <Animated.View className="rounded-md px-1" style={animatedStyle(usernameBorder)}>
        <TextInput
          placeholder="Username"
          className="rounded-md p-3"
          value={data.username}
          onFocus={() => (usernameBorder.value = 2)}
          onBlur={() => (usernameBorder.value = 1)}
          onChangeText={(v) => {
            setData({ username: v });
          }}
        />
      </Animated.View>

      {/* Email */}
      <Animated.View className="rounded-md px-1" style={animatedStyle(emailBorder)}>
        <TextInput
          placeholder="Email"
          className="rounded-md p-3"
          keyboardType="email-address"
          autoCapitalize="none"
          value={data.email}
          onFocus={() => (emailBorder.value = 2)}
          onBlur={() => (emailBorder.value = 1)}
          onChangeText={(v) => {
            setData({ email: v });
          }}
        />
      </Animated.View>

      {/* Password */}
      <Animated.View className="rounded-md px-1" style={animatedStyle(passwordBorder)}>
        <TextInput
          placeholder="Password"
          className="rounded-md p-3"
          secureTextEntry
          value={data.password}
          onFocus={() => (passwordBorder.value = 2)}
          onBlur={() => (passwordBorder.value = 1)}
          onChangeText={(v) => {
            setData({ password: v });
          }}
        />
      </Animated.View>
    </View>
  );
};

export default UserInfo;
