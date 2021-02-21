import firebase from 'firebase';

import { FurnitureCollections } from '../types/furniture.types';

export const updateFurnitureCollectionsService = async (
  furnitureCollections: FurnitureCollections,
): Promise<boolean | Error> => {
  try {
    await firebase
      .database()
      .ref(`/furnitureCollections/`)
      .update(furnitureCollections);

    return true;
  } catch (error) {
    return new Error(error);
  }
};
