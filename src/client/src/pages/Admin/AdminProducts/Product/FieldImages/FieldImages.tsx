import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';

interface props {
  furniture: Furniture;
}

export const FieldImages = ({ furniture }: props): JSX.Element => {
  const dispatch = useDispatch();

  const [furnitureState, setState] = useState(furniture);
  const { images } = furnitureState;

  const fieldImages = images.join(' ') || '';

  const changeValue = ({ target }: Event) => {
    const value = target.value.split(' ');

    setState((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.images = value;

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
      label="Ссылки на фотографии"
      variant="outlined"
      value={fieldImages}
      onChange={changeValue}
    />
  );
};
