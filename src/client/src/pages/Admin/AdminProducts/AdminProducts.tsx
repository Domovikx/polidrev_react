import * as React from 'react';

import { useFurnitureCollections } from '../../../hooks/useFurnitureCollections.hook';
import { furnitureMock } from '../../../mocks/Furniture.mock';
import { Furniture } from '../../../types/furniture.types';

import Product from './Product';

export const AdminProducts = (): JSX.Element | null => {
  const furnitureCollections = useFurnitureCollections();

  let count = 1;

  if (furnitureCollections) {
    const furnitures: Furniture[] = [];

    Object.entries(furnitureCollections).forEach(
      ([collectionName, collections]) => {
        collections.forEach((furniture: Furniture, idx: number) => {
          const newFurniture = { ...furnitureMock, ...furniture };

          newFurniture.collection = collectionName;
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
