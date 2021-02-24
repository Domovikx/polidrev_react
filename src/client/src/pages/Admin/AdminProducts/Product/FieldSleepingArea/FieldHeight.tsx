import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';

interface props {
  furniture: Furniture;
}

export const FieldHeight = ({ furniture }: props): JSX.Element => {
  const dispatch = useDispatch();

  const [furnitureState, setState] = useState(furniture);
  const { options } = furnitureState;

  const value = options?.sleepingArea?.height || 0;

  const changeValue = ({ target }: Event) => {
    const value = Number(target.value.trim());

    setState((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.options.sleepingArea.height = value;

      dispatch(setItemToChangeCollectionAction(furnitureState));

      return furnitureState;
    });
  };

  return (
    <TextField
      size="small"
      type="number"
      label="Высота (см)"
      variant="outlined"
      value={value}
      onChange={changeValue}
    />
  );
};
