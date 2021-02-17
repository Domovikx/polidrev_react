import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useAtom } from 'jotai';

import { Furniture, FurnitureEnum } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { furnitureCollectionsAtom } from '../../../../../storeAtom/furniture.atom';

interface props {
  furniture: Furniture;
}

export const FieldCost = ({ furniture }: props): JSX.Element => {
  const [furnitureState, setState] = useState(furniture);
  const { collection, idxArr } = furnitureState;

  const [, setFurnitureCollections] = useAtom(furnitureCollectionsAtom);

  const changeValue = ({ target }: Event) => {
    const cost = Number(target.value.trim());

    setFurnitureCollections((prevState) => {
      if (prevState !== null) {
        const furnitureCollections = { ...prevState };
        furnitureCollections[collection][idxArr][FurnitureEnum.cost] = cost;

        return furnitureCollections;
      }

      return prevState;
    });

    setState((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState[FurnitureEnum.cost] = cost;

      return furnitureState;
    });
  };

  return (
    <TextField
      type="number"
      label="Цена"
      variant="outlined"
      value={furnitureState.cost}
      onChange={changeValue}
    />
  );
};
