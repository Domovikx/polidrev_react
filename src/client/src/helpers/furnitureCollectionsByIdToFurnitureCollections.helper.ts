import { CollectionsById, Furniture } from '../types/furniture.types';

export interface FurnitureCollections {
  [key: string]: Furniture[];
}

export const furnitureCollectionsByIdToFurnitureCollections = (
  furnitureCollectionsById: CollectionsById,
): FurnitureCollections => {
  const furnitureCollections = Object.values(furnitureCollectionsById).reduce(
    (
      prev: FurnitureCollections,
      furniture: Furniture,
    ): FurnitureCollections => {
      const { collection, idxArr } = furniture;
      prev[collection] = prev[collection] || {};
      prev[collection][idxArr] = furniture;
      return prev;
    },
    {},
  );

  return furnitureCollections;
};
