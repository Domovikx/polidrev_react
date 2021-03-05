import { CollectionsById, Furniture } from '../types/furniture.types';

export interface FurnitureCollections {
  [key: string]: Furniture[];
}

export const furnituresToCollectionsById = (
  furnitures: Furniture[],
): CollectionsById => {
  const collectionsById: CollectionsById = {};

  furnitures.forEach((furniture) => {
    const id = String(furniture.id);
    collectionsById[id] = furniture;
  });

  return collectionsById;
};
