import { useEffect, useState } from 'react';

import { fetchArtworkById } from '../api/fetchArtworkById';
import { MetObjectDetails } from '../types';

export function useArtworkDetails(objectId: number | null) {
  const [artwork, setArtwork] = useState<MetObjectDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!objectId) {
      setError('Artwork not found.');
      setLoading(false);
      return;
    }

    let isActive = true;

    const loadArtwork = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchArtworkById(objectId);

        if (isActive) {
          setArtwork(data);
        }
      } catch (loadError) {
        console.error(loadError);

        if (isActive) {
          setError('Unable to load artwork details right now.');
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    loadArtwork();

    return () => {
      isActive = false;
    };
  }, [objectId]);

  return { artwork, loading, error };
}
