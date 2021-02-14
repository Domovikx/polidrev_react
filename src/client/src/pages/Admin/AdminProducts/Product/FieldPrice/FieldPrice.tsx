import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useAtom } from 'jotai';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { furnitureCollectionsAtom } from '../../../../../storeAtom/furniture.atom';

import { useStyles } from './FieldPrice.styles';

interface props {
  furniture: Furniture;
}

export const FieldPrice = ({ furniture }: props): JSX.Element => {
  const classes = useStyles();

  const [furnitureCollections, setFurnitureCollections] = useAtom(
    furnitureCollectionsAtom,
  );

  const [state, setState] = useState(furniture);

  const changeValue = ({ target }: Event) => {
    const value: string = target.value.trim();

    setState((state) => {
      const newState = { ...state };
      newState.cost = Number(value);

      setFurnitureCollections((furnitureCollections) => {
        if (furnitureCollections) {
          const newFurnitureCollections: any = { ...furnitureCollections };
          newFurnitureCollections[newState.collection][
            newState.idxArr
          ] = newState;

          return newFurnitureCollections;
        }

        return furnitureCollections;
      });

      return newState;
    });
  };

  return (
    <TextField
      type="number"
      label="Цена"
      variant="outlined"
      value={state.cost}
      onChange={changeValue}
    />
  );
};
