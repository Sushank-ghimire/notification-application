import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="notifications"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: 22,
          },
          headerTitle: 'Notifications',
        }}
      />
    </Stack>
  );
}
