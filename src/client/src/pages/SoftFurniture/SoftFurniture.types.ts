export interface Collection {
  collection: string;
  title: string;
  description?: string;
  img?: string;
  subtitle?: string;
}

export type SoftFurnitureCollections = Array<Collection>;
