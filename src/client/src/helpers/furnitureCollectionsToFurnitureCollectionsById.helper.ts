import {
  CollectionsById,
  Furniture,
  FurnitureCollections,
} from '../types/furniture.types';

export const furnitureCollectionsToFurnitureCollectionsById = (
  furnitureCollections: FurnitureCollections,
): CollectionsById =>
  Object.entries(furnitureCollections).reduce(
    (collectionsById: CollectionsById, [collection, items]) => {
      items.forEach((item: Furniture) => {
        collectionsById[item.id] = { ...item, collection };
      });

      return collectionsById;
    },
    {},
  );
