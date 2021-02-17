import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useAtom } from 'jotai';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { furnitureCollectionsAtom } from '../../../../../storeAtom/furniture.atom';

interface props {
  furniture: Furniture;
}

export const FieldHeight = ({ furniture }: props): JSX.Element => {
  const [furnitureState, setState] = useState(furniture);
  const { collection, idxArr } = furnitureState;

  const [, setFurnitureCollections] = useAtom(furnitureCollectionsAtom);

  const changeValue = ({ target }: Event) => {
    const value = Number(target.value.trim());

    setState((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.options.dimensions.height = value;

      setFurnitureCollections((prevState) => {
        if (prevState !== null) {
          const furnitureCollections = { ...prevState };
          furnitureCollections[collection][idxArr] = furnitureState;
          return furnitureCollections;
        }
        return prevState;
      });

      return furnitureState;
    });
  };

  return (
    <TextField
      type="number"
      label="Высота (см)"
      variant="outlined"
      value={furnitureState.options?.dimensions?.height || 0}
      onChange={changeValue}
    />
  );
};
