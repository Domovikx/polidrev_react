import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';
import { useFurniture } from '../../../../../hooks/useFurniture';

interface props {
  furnitureId: string | number;
}

export const FieldCorrespond = ({ furnitureId }: props): JSX.Element => {
  const dispatch = useDispatch();

  const { furniture, setFurniture } = useFurniture(furnitureId);
  const { options } = furniture;

  const value = options?.correspond || '';

  const changeValue = ({ target }: Event) => {
    const value = target.value.trimLeft();

    setFurniture((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.options.correspond = value;

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
      label="Изделие соответствует"
      variant="outlined"
      value={value}
      onChange={changeValue}
    />
  );
};
