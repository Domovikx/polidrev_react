import { atom } from 'jotai';

import { furnitureMock } from '../mocks/Furniture.mock';
import { fetchFurnitureCollectionsService } from '../services/fetchFurnitureCollections.service';
import { updateFurnitureCollectionsService } from '../services/updateFurnitureCollections.service';
import { Furniture, FurnitureCollections } from '../types/furniture.types';

export const furnitureCollectionsAtom = atom<FurnitureCollections | null>(null);

export const fetchFurnitureCollectionsAtom = atom(
  (get) => get(furnitureCollectionsAtom),

  async (get, set) => {
    const fetchFurnitureCollections =
      (await fetchFurnitureCollectionsService()) || null;

    const entries =
      fetchFurnitureCollections && Object.entries(fetchFurnitureCollections);

    let count = 1;

    const furnitureCollections = entries?.map(([collectionName, items]) => {
      const newItems = items.map((furniture: Furniture, idxArr) => ({
        ...JSON.parse(JSON.stringify(furnitureMock)),
        ...furniture,
        collection: collectionName,
        id: count++,
        idxArr,
      }));

      return [collectionName, newItems];
    });

    const collections: FurnitureCollections =
      furnitureCollections && Object.fromEntries(furnitureCollections);

    furnitureCollections && (await set(furnitureCollectionsAtom, collections));
  },
);

export const updateFurnitureCollectionsAtom = atom(
  (get) => get(furnitureCollectionsAtom),

  async (get, set, furnitureCollections: FurnitureCollections) => {
    await updateFurnitureCollectionsService(furnitureCollections);

    await set(furnitureCollectionsAtom, furnitureCollections);
  },
);
