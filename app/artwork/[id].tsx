import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';

import { Stack, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useArtworkDetails } from '../../features/home/hooks/useArtworkDetails';

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="border-b border-border py-4">
      <Text className="mb-1 font-body text-xs uppercase tracking-[2px] text-muted-foreground">
        {label}
      </Text>
      <Text className="font-body text-base leading-6 text-foreground">{value || 'Unknown'}</Text>
    </View>
  );
}

export default function ArtworkDetailScreen() {
  const params = useLocalSearchParams<{ id?: string }>();
  const objectId = params.id ? Number(params.id) : null;
  const { artwork, loading, error } = useArtworkDetails(objectId);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <StatusBar style="light" />
        <ActivityIndicator size="large" color="rgb(194 65 12)" />
      </View>
    );
  }

  if (error || !artwork) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-6">
        <StatusBar style="light" />
        <Stack.Screen options={{ title: 'Artwork' }} />
        <Text className="mb-2 text-center font-heading text-2xl text-foreground">No artwork</Text>
        <Text className="text-center font-body text-base text-muted-foreground">
          {error || 'We could not find details for this artwork.'}
        </Text>
      </View>
    );
  }

  const artworkImage = artwork.primaryImage || artwork.primaryImageSmall;
  const location = [artwork.city, artwork.country].filter(Boolean).join(', ');

  return (
    <View className="flex-1 bg-background">
      <StatusBar style="light" />
      <Stack.Screen options={{ title: artwork.title }} />

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {artworkImage ? (
          <Image source={{ uri: artworkImage }} className="h-[420px] w-full" resizeMode="cover" />
        ) : (
          <View className="h-[280px] items-center justify-center bg-secondary px-8">
            <Text className="text-center font-body text-base text-muted-foreground">
              No image available for this artwork.
            </Text>
          </View>
        )}

        <View className="px-6 pb-16 pt-6">
          <Text className="mb-2 font-body text-xs uppercase tracking-[2px] text-primary">
            {artwork.department}
          </Text>
          <Text className="mb-2 font-heading text-4xl leading-tight text-foreground">
            {artwork.title}
          </Text>
          <Text className="mb-6 font-body text-lg italic text-muted-foreground">
            {artwork.artistDisplayName || 'Unknown Artist'}
          </Text>

          <View className="mb-8 rounded-2xl border border-border bg-secondary px-5 py-4">
            <Text className="mb-1 font-body text-xs uppercase tracking-[2px] text-muted-foreground">
              Collection
            </Text>
            <Text className="font-body text-base leading-6 text-foreground">
              {artwork.repository || 'The Metropolitan Museum of Art'}
            </Text>
          </View>

          <DetailRow label="Date" value={artwork.objectDate} />
          <DetailRow label="Medium" value={artwork.medium} />
          <DetailRow label="Dimensions" value={artwork.dimensions} />
          <DetailRow label="Culture" value={artwork.culture} />
          <DetailRow label="Credit Line" value={artwork.creditLine} />
          <DetailRow label="Accession Number" value={artwork.accessionNumber} />
          <DetailRow label="Location" value={location} />
        </View>
      </ScrollView>
    </View>
  );
}
