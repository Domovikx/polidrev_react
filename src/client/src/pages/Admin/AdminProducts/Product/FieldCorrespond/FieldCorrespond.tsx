import React from 'react';
import { TextField } from '@material-ui/core';
import { useAtom } from 'jotai';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { furnitureCollectionsAtom } from '../../../../../storeAtom/furniture.atom';

interface props {
  furniture: Furniture;
}

export const FieldCorrespond = ({ furniture }: props): JSX.Element => {
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
        furnitureCollections[collection][idxArr].options.correspond = value;
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
      label="Изделие соответствует"
      variant="outlined"
      value={product?.options?.correspond || 0}
      onChange={changeValue}
    />
  );
};
