import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';
import { useFurniture } from '../../../../../hooks/useFurniture';

interface props {
  furnitureId: string | number;
}

export const FieldImages = ({ furnitureId }: props): JSX.Element => {
  const dispatch = useDispatch();

  const { furniture, setFurniture } = useFurniture(furnitureId);
  const { images } = furniture;

  const fieldImages = images.join(' ') || '';

  const changeValue = ({ target }: Event) => {
    const value = target.value.split(' ');

    setFurniture((prevState) => {
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
