import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Homepage', headerShadowVisible: false }} />
      <Stack.Screen
        name="(root)"
        options={{ title: 'Root', headerShown: false, animation: 'flip' }}
      />
      <Stack.Screen
        name="modal"
        options={{ title: 'Modal', headerShown: false, animation: 'fade_from_bottom' }}
      />
    </Stack>
  );
}
