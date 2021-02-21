import { Dispatch } from 'redux';

import { furnitureCollectionsByIdToFurnitureCollections } from '../../helpers/furnitureCollectionsByIdToFurnitureCollections.helper';
import { furnitureCollectionsToFurnitureCollectionsById } from '../../helpers/furnitureCollectionsToFurnitureCollectionsById.helper';
import { fetchFurnitureCollectionsService } from '../../services/fetchFurnitureCollections.service';
import { updateFurnitureCollectionsService } from '../../services/updateFurnitureCollections.service';
import {
  CollectionsById,
  Furniture,
  FurnitureCollections,
} from '../../types/furniture.types';
import { createNotifierAction } from '../notifier/notifier.actions';

import {
  FurnitureCollectionsAction,
  FURNITURE_COLLECTIONS,
} from './furnitureCollections.types';

export function fetchFurnitureCollectionsThunk() {
  return async function (dispatch: Dispatch): Promise<void> {
    try {
      const furnitureCollections = await fetchFurnitureCollectionsService();

      if (furnitureCollections) {
        await dispatch(setFurnitureCollectionsAction(furnitureCollections));
        const furnitureCollectionsById = await furnitureCollectionsToFurnitureCollectionsById(
          furnitureCollections,
        );

        await dispatch(
          setFurnitureCollectionsByIdAction(furnitureCollectionsById),
        );
      }
    } catch (error) {
      dispatch(createNotifierAction(error.message, 'warning'));
    }
  };
}

export function pushChangeCollectionThunk(
  furnitureCollectionsById: CollectionsById,
) {
  return async function (dispatch: Dispatch): Promise<void> {
    try {
      const furnitureCollections: FurnitureCollections = furnitureCollectionsByIdToFurnitureCollections(
        furnitureCollectionsById,
      );

      const updateResult = await updateFurnitureCollectionsService(
        furnitureCollections,
      );

      if (updateResult === true) {
        dispatch(createNotifierAction('Данные успешно обновлены', 'success'));
      }

      if (updateResult instanceof Error) {
        dispatch(
          createNotifierAction(`Ошибка. ${updateResult.message}`, 'warning'),
        );
      }
    } catch (error) {
      dispatch(createNotifierAction(error.message, 'warning'));
    }
  };
}

export const setFurnitureCollectionsAction = (
  furnitureCollections: FurnitureCollections,
): FurnitureCollectionsAction => ({
  payload: furnitureCollections,
  type: FURNITURE_COLLECTIONS.SET,
});

export const setFurnitureCollectionsByIdAction = (
  furnitureCollectionsById: CollectionsById,
): FurnitureCollectionsAction => ({
  payload: furnitureCollectionsById,
  type: FURNITURE_COLLECTIONS.SET_BY_ID,
});

export const setItemToChangeCollectionAction = (
  furniture: Furniture,
): FurnitureCollectionsAction => ({
  payload: furniture,
  type: FURNITURE_COLLECTIONS.SET_ITEM_TO_CHANGE_COLLECTION,
});
