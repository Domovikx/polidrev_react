import React from 'react';
import { TextField } from '@material-ui/core';
import { useAtom } from 'jotai';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { furnitureCollectionsAtom } from '../../../../../storeAtom/furniture.atom';

interface props {
  furniture: Furniture;
}

export const FieldHeight = ({ furniture }: props): JSX.Element => {
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
        ].options.dimensions2.height = value;
        return furnitureCollections;
      }
      return prevState;
    });
  };

  return (
    <TextField
      size="small"
      type="number"
      label="Высота (см)"
      variant="outlined"
      value={product?.options?.dimensions2?.height || 0}
      onChange={changeValue}
    />
  );
};
