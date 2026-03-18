import { MetObject } from '../types';

const MET_SEARCH_URL =
  'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&medium=Paintings&q=paints';
const FEATURED_ARTWORK_LIMIT = 10;

interface MetSearchResponse {
  objectIDs?: number[];
}

export async function fetchFeaturedArtworks(): Promise<MetObject[]> {
  const searchResponse = await fetch(MET_SEARCH_URL);
  const searchData: MetSearchResponse = await searchResponse.json();
  const objectIds = searchData.objectIDs?.slice(0, FEATURED_ARTWORK_LIMIT) ?? [];

  const artworks = await Promise.all(
    objectIds.map((id) =>
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then(
        (response) => response.json() as Promise<MetObject>
      )
    )
  );

  return artworks.filter((item) => item.primaryImageSmall || item.primaryImage);
}
