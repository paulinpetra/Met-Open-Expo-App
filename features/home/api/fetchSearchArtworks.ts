import { MetObject } from '../types';

const SEARCH_RESULT_LIMIT = 12;
const MET_BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

interface MetSearchResponse {
  objectIDs?: number[];
}

export async function fetchSearchArtworks(query: string): Promise<MetObject[]> {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return [];
  }

  const searchParams = new URLSearchParams({
    hasImages: 'true',
    q: trimmedQuery,
  });

  const searchResponse = await fetch(`${MET_BASE_URL}/search?${searchParams.toString()}`);
  const searchData: MetSearchResponse = await searchResponse.json();
  const objectIds = searchData.objectIDs?.slice(0, SEARCH_RESULT_LIMIT) ?? [];

  const artworks = await Promise.all(
    objectIds.map((id) =>
      fetch(`${MET_BASE_URL}/objects/${id}`).then(
        (response) => response.json() as Promise<MetObject>
      )
    )
  );

  return artworks.filter((item) => item.primaryImageSmall || item.primaryImage);
}
