import {
  CollectionsById,
  Furniture,
  FurnitureCollections,
} from '../types/furniture.types';

export const furnitureCollectionsByIdService = (
  furnitureCollections: FurnitureCollections,
): CollectionsById =>
  Object.entries(furnitureCollections).reduce(
    (collectionsById: CollectionsById, [collectionName, items]) => {
      items.forEach((item: Furniture) => {
        collectionsById[item.id] = { collectionName, ...item };
      });

      return collectionsById;
    },
    {},
  );
