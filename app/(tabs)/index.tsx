import React from 'react';
import { Text, View, FlatList, ActivityIndicator, ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { ArtworkCard } from '../../components/home/ArtworkCard';
import { SearchBar } from '../../components/home/SearchBar';
import { SectionHeader } from '../../components/home/SectionHeader';
import { StatCard } from '../../components/home/StatCard';
import { useFeaturedArtworks } from '../../features/home/hooks/useFeaturedArtworks';

export default function HomeScreen() {
  const { artworks, loading } = useFeaturedArtworks();

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="large" color="rgb(194 65 12)" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <StatusBar style="light" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        className="flex-1">
        {/* Header Section */}
        <View className="px-6 pb-8 pt-12">
          <Text className="mb-1 font-body text-sm tracking-widest text-muted-foreground">
            Welcome to
          </Text>
          <Text className="font-heading text-4xl text-foreground">Met Open</Text>

          <SearchBar placeholder="Search 474,000+ works..." />
        </View>

        {/* Featured List */}
        <View className="mb-10">
          <SectionHeader title="Featured" actionLabel="View All" />

          <FlatList
            data={artworks}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            keyExtractor={(item) => `feat-${item.objectID}`}
            renderItem={({ item }) => <ArtworkCard artwork={item} />}
          />
        </View>

        {/* Quick Stats Grid */}
        <View className="mb-12 flex-row gap-4 px-6">
          <StatCard value="474K" label="Artworks" />
          <StatCard value="19" label="Depts" />
        </View>
      </ScrollView>
    </View>
  );
}
