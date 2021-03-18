import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uid } from 'uid';

import { fetchFurnitureCollectionsThunk } from '../../../store/furnitureCollections/furnitureCollections.actions';
import { RootState } from '../../../store/root.reducer';
import { Furniture } from '../../../types/furniture.types';

import Product from './Product';

export const AdminProducts = (): JSX.Element | null => {
  const dispatch = useDispatch();

  const furnitureCollectionsById = useSelector(
    (state: RootState) => state.furnitureCollections.furnitureCollectionsById,
  );

  const initFurnitures: Furniture[] = [];
  const [furnitures, setFurnitures] = useState(initFurnitures);

  useEffect(() => {
    Object.keys(furnitureCollectionsById).length === 0
      ? dispatch(fetchFurnitureCollectionsThunk())
      : setFurnitures(Object.values(furnitureCollectionsById));
  }, [furnitureCollectionsById]);

  if (furnitureCollectionsById) {
    return (
      <>
        {furnitures.map((furniture) => (
          <Product key={furniture.id} furnitureId={furniture.id} />
        ))}
      </>
    );
  }

  return null;
};
