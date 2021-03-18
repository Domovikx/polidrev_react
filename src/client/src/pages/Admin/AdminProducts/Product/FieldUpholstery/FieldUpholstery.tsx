import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { Furniture } from '../../../../../types/furniture.types';
import { Event } from '../../../../../types/common.types';
import { setItemToChangeCollectionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';
import { useFurniture } from '../../../../../hooks/useFurniture';

interface props {
  furnitureId: string | number;
}

export const FieldUpholstery = ({ furnitureId }: props): JSX.Element => {
  const dispatch = useDispatch();

  const { furniture, setFurniture } = useFurniture(furnitureId);
  const { options } = furniture;

  const upholstery = options?.upholstery || '';

  const changeValue = ({ target }: Event) => {
    const value = target.value.trimLeft();

    setFurniture((prevState) => {
      const furnitureState: Furniture = { ...prevState };
      furnitureState.options.upholstery = value;

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
      label="Обивочный материал"
      variant="outlined"
      value={upholstery}
      onChange={changeValue}
    />
  );
};
