import { useEffect, useState } from 'react';

import { fetchFeaturedArtworks } from '../api/fetchFeaturedArtworks';
import { MetObject } from '../types';

export function useFeaturedArtworks() {
  const [artworks, setArtworks] = useState<MetObject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const loadArtworks = async () => {
      try {
        const data = await fetchFeaturedArtworks();

        if (isActive) {
          setArtworks(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    loadArtworks();

    return () => {
      isActive = false;
    };
  }, []);

  return { artworks, loading };
}
