import { furnitureCollectionsByIdService } from '../services/furnitureCollectionsById.service';
import { CollectionsById } from '../types/furniture.types';

import { useFurnitureCollections } from './useFurnitureCollections.hook';

export function useFurnitureCollectionsById(): CollectionsById | null {
  const furnitureCollections = useFurnitureCollections();

  const furnitureCollectionsById =
    furnitureCollections &&
    furnitureCollectionsByIdService(furnitureCollections);

  return furnitureCollectionsById;
}
