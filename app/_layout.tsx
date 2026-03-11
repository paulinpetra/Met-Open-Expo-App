import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import '../global.css';

import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';

import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';

import {
  JetBrainsMono_400Regular,
  JetBrainsMono_500Medium,
} from '@expo-google-fonts/jetbrains-mono';

export default function RootLayout() {
  const [loaded] = useFonts({
    Playfair_400: PlayfairDisplay_400Regular,
    Playfair_500: PlayfairDisplay_500Medium,
    Playfair_600: PlayfairDisplay_600SemiBold,
    Playfair_700: PlayfairDisplay_700Bold,

    Inter_400: Inter_400Regular,
    Inter_500: Inter_500Medium,
    Inter_600: Inter_600SemiBold,

    Mono_400: JetBrainsMono_400Regular,
    Mono_500: JetBrainsMono_500Medium,
  });

  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
