import {
  CollectionsById,
  Furniture,
  FurnitureCollections,
} from '../../types/furniture.types';

import {
  FurnitureCollectionsAction,
  FURNITURE_COLLECTIONS,
} from './furnitureCollections.types';

export interface FurnitureCollectionsState {
  changeCollection: CollectionsById;
  furnitureCollections: FurnitureCollections | { [key: string]: Furniture[] };
  furnitureCollectionsById: CollectionsById;
}

export const furnitureCollectionsState: FurnitureCollectionsState = {
  changeCollection: {},
  furnitureCollections: {},
  furnitureCollectionsById: {},
};

export const furnitureCollectionsReducer = (
  state = furnitureCollectionsState,
  { type, payload }: FurnitureCollectionsAction,
): FurnitureCollectionsState => {
  const newState = { ...state };

  switch (type) {
    case FURNITURE_COLLECTIONS.FETCH: {
      return state;
    }

    case FURNITURE_COLLECTIONS.SET: {
      return { ...state, furnitureCollections: payload };
    }

    case FURNITURE_COLLECTIONS.SET_BY_ID: {
      return { ...state, furnitureCollectionsById: payload };
    }

    case FURNITURE_COLLECTIONS.SET_ITEM_TO_CHANGE_COLLECTION: {
      const furniture: Furniture = payload;
      const changeCollection = newState.changeCollection;
      changeCollection[furniture.id] = furniture;

      return { ...state, changeCollection };
    }

    default:
      return state;
  }
};
