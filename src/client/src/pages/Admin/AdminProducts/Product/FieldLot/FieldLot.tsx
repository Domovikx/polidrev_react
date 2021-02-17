import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useAtom } from 'jotai';

import { Furniture, FurnitureEnum } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { furnitureCollectionsAtom } from '../../../../../storeAtom/furniture.atom';

interface props {
  furniture: Furniture;
}

export const FieldLot = ({ furniture }: props): JSX.Element => {
  const [furnitureState, setState] = useState(furniture);
  const { collection, idxArr } = furnitureState;

  const [, setFurnitureCollections] = useAtom(furnitureCollectionsAtom);

  const changeValue = ({ target }: Event) => {
    const value = target.value.trimLeft();

    setFurnitureCollections((prevState) => {
      if (prevState !== null) {
        const furnitureCollections = { ...prevState };
        furnitureCollections[collection][idxArr][FurnitureEnum.lot] = value;

        return furnitureCollections;
      }

      return prevState;
    });

    setState((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState[FurnitureEnum.lot] = value;

      return furnitureState;
    });
  };

  return (
    <TextField
      multiline
      type="text"
      label="lot"
      variant="outlined"
      value={furnitureState.lot}
      onChange={changeValue}
    />
  );
};
