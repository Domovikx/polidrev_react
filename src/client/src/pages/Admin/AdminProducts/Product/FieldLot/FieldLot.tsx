import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';
import { useFurniture } from '../../../../../hooks/useFurniture';

interface props {
  furnitureId: string | number;
}

export const FieldLot = ({ furnitureId }: props): JSX.Element => {
  const dispatch = useDispatch();

  const { furniture, setFurniture } = useFurniture(furnitureId);
  const { lot } = furniture;

  const changeValue = ({ target }: Event) => {
    const value = target.value.trimLeft();

    setFurniture((prevState) => {
      const furnitureState = { ...prevState };
      furnitureState.lot = value;

      dispatch(setItemToChangeCollectionAction(furnitureState));

      return furnitureState;
    });
  };

  return (
    <TextField
      multiline
      type="text"
      label="lot"
      variant="outlined"
      value={lot}
      onChange={changeValue}
    />
  );
};
