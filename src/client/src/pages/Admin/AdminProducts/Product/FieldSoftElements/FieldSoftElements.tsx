import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';

interface props {
  furniture: Furniture;
}

export const FieldSoftElements = ({ furniture }: props): JSX.Element => {
  const dispatch = useDispatch();

  const [furnitureState, setState] = useState(furniture);
  const { options } = furnitureState;

  const value = options?.softElements || '';

  const changeValue = ({ target }: Event) => {
    const value = target.value.trimLeft();

    setState((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.options.softElements = value;

      dispatch(setItemToChangeCollectionAction(furnitureState));

      return furnitureState;
    });
  };

  return (
    <TextField
      multiline
      fullWidth
      size="small"
      type="text"
      label="Мягкие элементы"
      variant="outlined"
      value={value}
      onChange={changeValue}
    />
  );
};
