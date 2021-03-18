import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';
import { useFurniture } from '../../../../../hooks/useFurniture';

interface props {
  furnitureId: string | number;
}

export const FieldCost = ({ furnitureId }: props): JSX.Element => {
  const dispatch = useDispatch();

  const { furniture, setFurniture } = useFurniture(furnitureId);
  const { cost } = furniture;

  const changeValue = ({ target }: Event) => {
    const value = Number(target.value.trim());

    setFurniture((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.cost = value;

      dispatch(setItemToChangeCollectionAction(furnitureState));

      return furnitureState;
    });
  };

  return (
    <TextField
      type="number"
      label="Цена"
      variant="outlined"
      value={cost}
      onChange={changeValue}
    />
  );
};
