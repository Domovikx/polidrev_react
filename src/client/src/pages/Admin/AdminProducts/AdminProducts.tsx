import * as React from 'react';

import { furnitureCollections } from '../../../mocks/FurnitureCollections';
import { Furniture } from '../../../mocks/FurnitureCollections.types';

import Product from './Product';

export const AdminProducts = (): JSX.Element => {
  // TODO - move to DB, any
  const collections: any = Object.values(furnitureCollections);
  const furnitures: Furniture[] = collections.flat();

  return (
    <>
      {furnitures.map((furniture, index: number) => (
        <Product key={index} furniture={furniture} />
      ))}
    </>
  );
};
