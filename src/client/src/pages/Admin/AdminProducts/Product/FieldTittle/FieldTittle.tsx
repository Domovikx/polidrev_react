import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';
import { useFurniture } from '../../../../../hooks/useFurniture';

interface props {
  furnitureId: string | number;
}

export const FieldTittle = ({ furnitureId }: props): JSX.Element => {
  const dispatch = useDispatch();

  const { furniture, setFurniture } = useFurniture(furnitureId);
  const { tittle } = furniture;

  const changeValue = ({ target }: Event) => {
    const value = target.value.trimLeft();

    setFurniture((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.tittle = value;

      dispatch(setItemToChangeCollectionAction(furnitureState));

      return furnitureState;
    });
  };

  return (
    <TextField
      multiline
      type="text"
      label="Название"
      variant="outlined"
      value={tittle}
      onChange={changeValue}
    />
  );
};
