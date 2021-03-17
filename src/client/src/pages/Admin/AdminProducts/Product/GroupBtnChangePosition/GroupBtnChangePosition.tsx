import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Furniture } from '../../../../../types/furniture.types';
import { RootState } from '../../../../../store/root.reducer';
import { changePositionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';

interface props {
  furniture: Furniture;
}

export type Event = React.ChangeEvent<{
  name?: string | undefined;
  value: unknown;
}>;

export const GroupBtnChangePosition = ({ furniture }: props): JSX.Element => {
  const { idxArr, id } = furniture;

  const furnitures = useSelector(
    (state: RootState) => state.furnitureCollections.furnitureCollectionsById,
  );

  const nextIdxArr = furnitures[Number(id) + 1]?.idxArr;

  const dispatch = useDispatch();

  const handleUp = () => {
    dispatch(changePositionAction(furniture, furnitures[Number(id) - 1]));
  };
  const handleDown = () => {
    dispatch(changePositionAction(furniture, furnitures[Number(id) + 1]));
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      {idxArr > 0 && <Button onClick={handleUp}>вверх</Button>}
      {idxArr < nextIdxArr && <Button onClick={handleDown}>вниз</Button>}
    </ButtonGroup>
  );
};
