import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';
import { useFurniture } from '../../../../../hooks/useFurniture';

interface props {
  furnitureId: string | number;
}

export const FieldHeight = ({ furnitureId }: props): JSX.Element => {
  const dispatch = useDispatch();

  const { furniture, setFurniture } = useFurniture(furnitureId);
  const { options } = furniture;

  const value = options?.sleepingArea?.height || 0;

  const changeValue = ({ target }: Event) => {
    const value = Number(target.value.trim());

    setFurniture((prevState) => {
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
