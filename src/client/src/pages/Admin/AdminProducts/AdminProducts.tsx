import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { furnitureMock } from '../../../mocks/Furniture.mock';
import { fetchFurnitureCollectionsThunk } from '../../../store/furnitureCollections/furnitureCollections.actions';
import { RootState } from '../../../store/root.reducer';
import { Furniture } from '../../../types/furniture.types';

import Product from './Product';

export const AdminProducts = (): JSX.Element | null => {
  const dispatch = useDispatch();

  const furnitureCollections = useSelector(
    (state: RootState) => state.furnitureCollections.furnitureCollections,
  );

  Object.keys(furnitureCollections).length === 0 &&
    dispatch(fetchFurnitureCollectionsThunk());

  let count = 1;

  if (furnitureCollections) {
    const furnitures: Furniture[] = [];

    Object.entries(furnitureCollections).forEach(
      ([collection, collections]) => {
        collections.forEach((furniture: Furniture, idx: number) => {
          const newFurniture = { ...furnitureMock, ...furniture };

          newFurniture.collection = collection;
          newFurniture.idxArr = idx;
          newFurniture.id = String(count++);

          furnitures.push(newFurniture);
        });
      },
    );

    return (
      <>
        {furnitures.map((furniture, index: number) => (
          <Product key={index} furniture={furniture} />
        ))}
      </>
    );
  }

  return null;
};
