import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';

interface props {
  furniture: Furniture;
}

export const FieldCost = ({ furniture }: props): JSX.Element => {
  const dispatch = useDispatch();

  const [furnitureState, setState] = useState(furniture);
  const { cost } = furnitureState;

  const changeValue = ({ target }: Event) => {
    const value = Number(target.value.trim());

    setState((prevState) => {
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
