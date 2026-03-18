import { MetObjectDetails } from '../types';

export async function fetchArtworkById(objectId: number): Promise<MetObjectDetails> {
  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
  );

  return response.json() as Promise<MetObjectDetails>;
}
