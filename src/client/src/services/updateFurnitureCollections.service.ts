import firebase from 'firebase';

import { FurnitureCollections } from '../types/furniture.types';

export const updateFurnitureCollectionsService = async (
  furnitureCollections: FurnitureCollections,
): Promise<void> => {
  try {
    await firebase
      .database()
      .ref(`/furnitureCollections/`)
      .update(furnitureCollections);
  } catch (error) {
    console.log('error :>> ', error);
  }
};
