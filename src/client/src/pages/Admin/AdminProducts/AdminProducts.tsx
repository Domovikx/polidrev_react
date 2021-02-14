import * as React from 'react';

import { useFurnitureCollections } from '../../../hooks/useFurnitureCollections.hook';
import { Furniture } from '../../../types/furniture.types';

import Product from './Product';

export const AdminProducts = (): JSX.Element | null => {
  const furnitureCollections = useFurnitureCollections();

  if (furnitureCollections) {
    // TODO - move to DB, any

    const furnitures: Furniture[] = [];

    // TODO: костыль
    Object.entries(furnitureCollections).forEach(
      ([collectionName, collections]: any) => {
        collections.forEach((furniture: any, idx: number) => {
          const newFurniture = { ...furniture };

          newFurniture.collection = collectionName;
          newFurniture.idxArr = idx;

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
