import firebase from 'firebase';

import { FurnitureCollections } from '../types/furniture.types';

export const fetchFurnitureCollectionsService = async (): Promise<
  FurnitureCollections | undefined
> => {
  try {
    const furnitureCollections: FurnitureCollections = (
      await firebase.database().ref(`/furnitureCollections/`).once('value')
    ).val();

    return furnitureCollections;
  } catch (error) {
    console.log('error :>> ', error);
  }
};
