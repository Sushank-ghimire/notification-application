import '../global.css';

import { Stack } from 'expo-router';
import { useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const onLayoutRootView = useCallback(async () => {
    // Hide splash screen after layout is ready
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  return (
    <View onLayout={onLayoutRootView} className="flex-1 bg-white">
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
    </View>
  );
}
