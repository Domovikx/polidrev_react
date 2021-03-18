import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchFurnitureCollectionsThunk,
  pushChangeCollectionThunk,
} from '../../../store/furnitureCollections/furnitureCollections.actions';
import { RootState } from '../../../store/root.reducer';

export const ButtonUpdateProducts = (): JSX.Element => {
  const dispatch = useDispatch();

  const furnitureCollections = useSelector(
    (state: RootState) => state.furnitureCollections,
  );

  const { furnitureCollectionsById } = furnitureCollections;

  const handler = async () => {
    await dispatch(pushChangeCollectionThunk(furnitureCollectionsById));
    await dispatch(fetchFurnitureCollectionsThunk());
  };

  return (
    <Button color="primary" onClick={handler}>
      Сохранить
    </Button>
  );
};
