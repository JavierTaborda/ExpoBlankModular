import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(tab1)" options={{ title: "Tab 1", headerShown: false }} />
      <Tabs.Screen name="(home)" options={{ title: "Home", headerShown: false }} />
      <Tabs.Screen name="(tab2)" options={{ title: "Tab 2", headerShown: false }} />
    </Tabs>
  );
}