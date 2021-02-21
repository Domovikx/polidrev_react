import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';

interface props {
  furniture: Furniture;
}

export const FieldWidth = ({ furniture }: props): JSX.Element => {
  const dispatch = useDispatch();

  const [furnitureState, setState] = useState(furniture);
  const { options } = furnitureState;

  const width = options?.dimensions2?.width || 0;

  const changeValue = ({ target }: Event) => {
    const value = Number(target.value.trim());

    setState((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.options.dimensions2.width = value;

      dispatch(setItemToChangeCollectionAction(furnitureState));

      return furnitureState;
    });
  };

  return (
    <TextField
      size="small"
      type="number"
      label="Ширина (см)"
      variant="outlined"
      value={width}
      onChange={changeValue}
    />
  );
};
