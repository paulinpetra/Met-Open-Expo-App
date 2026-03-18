export interface MetObject {
  objectID: number;
  primaryImageSmall: string;
  primaryImage: string;
  title: string;
  artistDisplayName: string;
  department: string;
}

export interface MetObjectDetails extends MetObject {
  objectDate: string;
  culture: string;
  medium: string;
  dimensions: string;
  repository: string;
  creditLine: string;
  accessionNumber: string;
  city: string;
  country: string;
}
