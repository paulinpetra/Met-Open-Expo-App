import { Image, Text, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { MetObject } from '../../features/home/types';

interface ArtworkCardProps {
  artwork: MetObject;
  onPress?: () => void;
}

export function ArtworkCard({ artwork, onPress }: ArtworkCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="mr-5 h-[420px] w-72 overflow-hidden rounded-lg bg-card shadow-2xl">
      <Image
        source={{ uri: artwork.primaryImageSmall || artwork.primaryImage }}
        className="h-full w-full"
        resizeMode="cover"
      />
      <LinearGradient
        colors={['transparent', 'rgba(26, 22, 20, 0.95)']}
        className="absolute inset-0"
        start={{ x: 0.5, y: 0.4 }}
      />
      <View className="absolute bottom-0 left-0 right-0 p-6">
        <Text className="mb-2 font-body text-[10px] font-bold uppercase tracking-tighter text-primary">
          {artwork.department}
        </Text>
        <Text className="mb-1 font-heading text-2xl text-foreground" numberOfLines={2}>
          {artwork.title}
        </Text>
        <Text className="font-body text-sm italic text-muted-foreground">
          {artwork.artistDisplayName || 'Unknown Artist'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
