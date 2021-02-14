import * as React from 'react';

import { useFurnitureCollections } from '../../../hooks/useFurnitureCollections.hook';
import { Furniture } from '../../../types/furniture.types';

import Product from './Product';

export const AdminProducts = (): JSX.Element => {
  const furnitureCollections = useFurnitureCollections();

  // TODO - move to DB, any
  const collections: any = furnitureCollections
    ? Object.values(furnitureCollections)
    : [];
  const furnitures: Furniture[] = collections.flat();

  return (
    <>
      {furnitures.map((furniture, index: number) => (
        <Product key={index} furniture={furniture} />
      ))}
    </>
  );
};
