import { atom } from 'jotai';

import { fetchFurnitureCollectionsService } from '../services/fetchFurnitureCollections.service';
import { updateFurnitureCollectionsService } from '../services/updateFurnitureCollections.service';
import { FurnitureCollections } from '../types/furniture.types';

export const furnitureCollectionsAtom = atom<FurnitureCollections | null>(null);

export const fetchFurnitureCollectionsAtom = atom(
  (get) => get(furnitureCollectionsAtom),

  async (get, set) => {
    const furnitureCollections =
      (await fetchFurnitureCollectionsService()) || null;

    furnitureCollections &&
      (await set(furnitureCollectionsAtom, furnitureCollections));
  },
);

export const updateFurnitureCollectionsAtom = atom(
  (get) => get(furnitureCollectionsAtom),

  async (get, set, furnitureCollections: FurnitureCollections) => {
    await updateFurnitureCollectionsService(furnitureCollections);

    await set(furnitureCollectionsAtom, furnitureCollections);
  },
);
