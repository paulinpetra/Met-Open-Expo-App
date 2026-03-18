import React, { useState } from 'react';
import { Text, View, FlatList, ActivityIndicator, ScrollView } from 'react-native';

import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { ArtworkCard } from '../../components/home/ArtworkCard';
import { SearchBar } from '../../components/home/SearchBar';
import { SectionHeader } from '../../components/home/SectionHeader';
import { StatCard } from '../../components/home/StatCard';
import { useArtworkSearch } from '../../features/home/hooks/useArtworkSearch';
import { useFeaturedArtworks } from '../../features/home/hooks/useFeaturedArtworks';

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const { artworks, loading } = useFeaturedArtworks();
  const {
    artworks: searchResults,
    loading: searchLoading,
    error: searchError,
  } = useArtworkSearch(searchQuery);
  const isSearching = searchQuery.trim().length > 0;
  const visibleArtworks = isSearching ? searchResults : artworks;

  if (loading && !isSearching) {
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

          <SearchBar
            placeholder="Search 474,000+ works..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Featured List */}
        <View className="mb-10">
          <SectionHeader
            title={isSearching ? 'Search Results' : 'Featured'}
            actionLabel="View All"
          />

          {searchLoading ? (
            <View className="items-center justify-center px-6 py-12">
              <ActivityIndicator size="small" color="rgb(194 65 12)" />
              <Text className="mt-4 font-body text-sm text-muted-foreground">
                Searching the collection...
              </Text>
            </View>
          ) : searchError ? (
            <View className="px-6 py-8">
              <Text className="font-body text-base text-muted-foreground">{searchError}</Text>
            </View>
          ) : isSearching && visibleArtworks.length === 0 ? (
            <View className="px-6 py-8">
              <Text className="font-body text-base text-muted-foreground">
                No artworks matched this search.
              </Text>
            </View>
          ) : (
            <FlatList
              data={visibleArtworks}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24 }}
              keyExtractor={(item) => `art-${item.objectID}`}
              renderItem={({ item }) => (
                <ArtworkCard
                  artwork={item}
                  onPress={() => router.push(`/artwork/${item.objectID}`)}
                />
              )}
            />
          )}
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
