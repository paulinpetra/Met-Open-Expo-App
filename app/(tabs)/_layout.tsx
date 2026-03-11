import { tokens } from '../../theme/tokens';
import { Tabs } from 'expo-router';
import { Heart, Home, Layers, MapPin } from 'lucide-react-native';

export default function TabsLayout() {
  //implement modes later:
  //const scheme = useColorScheme();
  //const theme =
  //  scheme === "dark"
  //    ? tokens.colors.dark
  //    : tokens.colors.light;
  const theme = tokens.colors.dark;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopWidth: 1,
          borderTopColor: theme.border,
          height: 65,
          paddingBottom: 10,
        },

        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.tabInactive,

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="departments"
        options={{
          title: 'Departments',
          tabBarIcon: ({ color, size }) => <Layers size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="tours"
        options={{
          title: 'Tours',
          tabBarIcon: ({ color, size }) => <MapPin size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => <Heart size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
