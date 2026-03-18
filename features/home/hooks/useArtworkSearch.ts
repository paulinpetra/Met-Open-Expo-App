import { useEffect, useState } from 'react';

import { fetchSearchArtworks } from '../api/fetchSearchArtworks';
import { MetObject } from '../types';

const SEARCH_DEBOUNCE_MS = 350;

export function useArtworkSearch(query: string) {
  const [artworks, setArtworks] = useState<MetObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setArtworks([]);
      setLoading(false);
      setError(null);
      return;
    }

    let isActive = true;
    setLoading(true);
    setError(null);

    const timeoutId = setTimeout(async () => {
      try {
        const data = await fetchSearchArtworks(trimmedQuery);

        if (isActive) {
          setArtworks(data);
        }
      } catch (searchError) {
        console.error(searchError);

        if (isActive) {
          setArtworks([]);
          setError('Search is unavailable right now.');
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, [query]);

  return { artworks, loading, error };
}
