import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';

interface props {
  furniture: Furniture;
}

export const FieldLength = ({ furniture }: props): JSX.Element => {
  const dispatch = useDispatch();

  const [furnitureState, setState] = useState(furniture);
  const { options } = furnitureState;

  const length = options?.dimensions?.length || 0;

  const changeValue = ({ target }: Event) => {
    const value = Number(target.value.trim());

    setState((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.options.dimensions.length = value;

      dispatch(setItemToChangeCollectionAction(furnitureState));

      return furnitureState;
    });
  };

  return (
    <TextField
      size="small"
      type="number"
      label="Длина (см)"
      variant="outlined"
      value={length}
      onChange={changeValue}
    />
  );
};
