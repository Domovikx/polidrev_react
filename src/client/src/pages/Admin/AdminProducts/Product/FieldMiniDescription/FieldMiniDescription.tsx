import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';

interface props {
  furniture: Furniture;
}

export const FieldMiniDescription = ({ furniture }: props): JSX.Element => {
  const dispatch = useDispatch();

  const [furnitureState, setState] = useState(furniture);
  const { miniDescription } = furnitureState;

  const changeValue = ({ target }: Event) => {
    const value = target.value.trimLeft();

    setState((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.miniDescription = value;

      dispatch(setItemToChangeCollectionAction(furnitureState));

      return furnitureState;
    });
  };

  return (
    <TextField
      multiline
      fullWidth
      type="text"
      label="Мини описание"
      variant="outlined"
      value={miniDescription}
      onChange={changeValue}
    />
  );
};
