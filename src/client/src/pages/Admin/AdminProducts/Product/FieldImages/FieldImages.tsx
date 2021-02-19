import React from 'react';
import { TextField } from '@material-ui/core';
import { useAtom } from 'jotai';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { furnitureCollectionsAtom } from '../../../../../storeAtom/furniture.atom';

interface props {
  furniture: Furniture;
}

export const FieldImages = ({ furniture }: props): JSX.Element => {
  const { collection, idxArr } = furniture;

  const [furnitureCollections, setFurnitureCollections] = useAtom(
    furnitureCollectionsAtom,
  );

  const product =
    furnitureCollections && furnitureCollections[collection][idxArr];

  const fieldImages = product?.images.join(' ');

  const changeValue = ({ target }: Event) => {
    const value = target.value.split(' ');

    setFurnitureCollections((prevState) => {
      if (prevState !== null && product) {
        const furnitureCollections = { ...prevState };

        furnitureCollections[collection][idxArr].images = value;
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
      label="Фотографии"
      variant="outlined"
      value={fieldImages || ''}
      onChange={changeValue}
    />
  );
};
