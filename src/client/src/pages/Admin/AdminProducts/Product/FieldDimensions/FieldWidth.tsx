import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';
import { useFurniture } from '../../../../../hooks/useFurniture';

interface props {
  furnitureId: string | number;
}

export const FieldWidth = ({ furnitureId }: props): JSX.Element => {
  const dispatch = useDispatch();

  const { furniture, setFurniture } = useFurniture(furnitureId);
  const { options } = furniture;

  const width = options?.dimensions?.width || 0;

  const changeValue = ({ target }: Event) => {
    const value = Number(target.value.trim());

    setFurniture((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.options.dimensions.width = value;

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
