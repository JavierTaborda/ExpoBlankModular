import { Stack } from 'expo-router';

export default function tab1Layout() {
  return (
    <Stack  screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="example1" />
    </Stack>
  );
}
