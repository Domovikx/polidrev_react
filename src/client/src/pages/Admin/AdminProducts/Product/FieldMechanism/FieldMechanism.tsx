import React from 'react';
import { TextField } from '@material-ui/core';
import { useAtom } from 'jotai';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { furnitureCollectionsAtom } from '../../../../../storeAtom/furniture.atom';

interface props {
  furniture: Furniture;
}

export const FieldMechanism = ({ furniture }: props): JSX.Element => {
  const { collection, idxArr } = furniture;

  const [furnitureCollections, setFurnitureCollections] = useAtom(
    furnitureCollectionsAtom,
  );

  const product =
    furnitureCollections && furnitureCollections[collection][idxArr];

  const changeValue = ({ target }: Event) => {
    const value = target.value;

    setFurnitureCollections((prevState) => {
      if (prevState !== null && product) {
        const furnitureCollections = { ...prevState };
        furnitureCollections[collection][idxArr].options.mechanism = value;
        return furnitureCollections;
      }
      return prevState;
    });
  };

  return (
    <TextField
      multiline
      fullWidth
      size="small"
      type="text"
      label="Механизм раскладки"
      variant="outlined"
      value={product?.options?.mechanism || 0}
      onChange={changeValue}
    />
  );
};
