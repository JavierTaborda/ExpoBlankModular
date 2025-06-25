import { CustomDrawerContent } from '@/components/CustomDrawerContent';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={({ route }) => ({
          headerShown: true,
          headerStyle: { backgroundColor: '#0fb50a' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          
          // drawer hidden in auth routes
          headerLeft: (props) => 
            route.name?.includes('(auth)') 
              ? null 
              : <DrawerToggleButton {...props} tintColor="#fff" />,
          

          drawerType: 'slide',
          swipeEdgeWidth: 60, 
          drawerStyle: {
            backgroundColor: '#fff',
            width: '80%',
            paddingTop: 40, 
            paddingHorizontal: 20, 
            
          },
        })}
      >
     
        <Drawer.Screen 
          name="(main)/(tabs)" 
          options={{ title: 'Menú Principal' }}
        />
        
        <Drawer.Screen 
          name="(auth)" 
          options={{
            drawerItemStyle: { display: 'none' }, 
            swipeEnabled: false, 
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}