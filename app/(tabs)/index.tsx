import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { ChevronRight, Search } from 'lucide-react-native';
import { tokens } from '../../theme/tokens';

interface MetObject {
  objectID: number;
  primaryImageSmall: string;
  primaryImage: string;
  title: string;
  artistDisplayName: string;
  department: string;
}

export default function HomeScreen() {
  const [data, setData] = useState<MetObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetData = async () => {
      try {
        const searchRes = await fetch(
          'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Paintings&q=paints'
        );
        const searchData = await searchRes.json();
        const promises = searchData.objectIDs
          .slice(0, 10)
          .map((id: number) =>
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then(
              (res) => res.json()
            )
          );
        const results = await Promise.all(promises);
        setData(results.filter((item) => item.primaryImageSmall || item.primaryImage));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMetData();
  }, []);

  if (loading) {
    return (
      <View className="bg-background flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="rgb(194 65 12)" />
      </View>
    );
  }

  return (
    <View className="bg-background flex-1">
      <StatusBar style="light" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        className="flex-1">
        {/* Header Section */}
        <View className="px-6 pb-8 pt-12">
          <Text className="text-muted-foreground font-body mb-1 text-sm tracking-widest">
            Welcome to
          </Text>
          <Text className="text-foreground font-heading text-4xl">Met Open</Text>

          {/* Search Bar */}
          <View className="bg-input border-border mt-6 flex-row items-center rounded-lg border px-4 py-3">
            <Search size={18} color={tokens.colors.dark.primary} />
            <Text className="text-muted-foreground font-body ml-3">Search 474,000+ works...</Text>
          </View>
        </View>

        {/* Featured List */}
        <View className="mb-10">
          <View className="mb-4 flex-row items-end justify-between px-6">
            <Text className="text-foreground font-heading text-2xl">Featured</Text>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-primary font-body mr-1 text-sm">View All</Text>
              <ChevronRight size={14} color={tokens.colors.dark.primary} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            keyExtractor={(item) => `feat-${item.objectID}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.9}
                className="bg-card mr-5 h-[420px] w-72 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  source={{ uri: item.primaryImageSmall || item.primaryImage }}
                  className="h-full w-full"
                  resizeMode="cover"
                />
                <LinearGradient
                  colors={['transparent', 'rgba(26, 22, 20, 0.95)']}
                  className="absolute inset-0"
                  start={{ x: 0.5, y: 0.4 }}
                />
                <View className="absolute bottom-0 left-0 right-0 p-6">
                  <Text className="text-primary font-body mb-2 text-[10px] font-bold uppercase tracking-tighter">
                    {item.department}
                  </Text>
                  <Text className="text-foreground font-heading mb-1 text-2xl" numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text className="text-muted-foreground font-body text-sm italic">
                    {item.artistDisplayName || 'Unknown Artist'}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Quick Stats Grid */}
        <View className="mb-12 flex-row gap-4 px-6">
          <View className="bg-secondary border-border flex-1 rounded-lg border p-5">
            <Text className="font-heading text-primary text-2xl">474K</Text>
            <Text className="text-muted-foreground font-body mt-1 text-[10px] uppercase tracking-widest">
              Artworks
            </Text>
          </View>
          <View className="bg-secondary border-border flex-1 rounded-lg border p-5">
            <Text className="font-heading text-primary text-2xl">19</Text>
            <Text className="text-muted-foreground font-body mt-1 text-[10px] uppercase tracking-widest">
              Depts
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
