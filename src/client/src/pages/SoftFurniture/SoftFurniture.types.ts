import { FurnitureCollections } from '../../mocks/FurnitureCollections.types';

export interface Collection {
  collection: keyof FurnitureCollections;
  title: string;
  description?: string;
  img?: string;
  subtitle?: string;
}

export type SoftFurnitureCollections = Array<Collection>;
