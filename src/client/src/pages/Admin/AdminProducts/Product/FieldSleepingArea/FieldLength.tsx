import React from 'react';
import { TextField } from '@material-ui/core';
import { useAtom } from 'jotai';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { furnitureCollectionsAtom } from '../../../../../storeAtom/furniture.atom';

interface props {
  furniture: Furniture;
}

export const FieldLength = ({ furniture }: props): JSX.Element => {
  const { collection, idxArr } = furniture;

  const [furnitureCollections, setFurnitureCollections] = useAtom(
    furnitureCollectionsAtom,
  );

  const product =
    furnitureCollections && furnitureCollections[collection][idxArr];

  const changeValue = ({ target }: Event) => {
    const value = Number(target.value.trim());

    setFurnitureCollections((prevState) => {
      if (prevState !== null && product) {
        const furnitureCollections = { ...prevState };
        furnitureCollections[collection][
          idxArr
        ].options.sleepingArea.length = value;
        return furnitureCollections;
      }
      return prevState;
    });
  };

  return (
    <TextField
      size="small"
      type="number"
      label="Длина (см)"
      variant="outlined"
      value={product?.options?.sleepingArea?.length || 0}
      onChange={changeValue}
    />
  );
};
