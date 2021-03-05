import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import {
  CollectionsById,
  Furniture,
} from '../../../../../types/furniture.types';
import { RootState } from '../../../../../store/root.reducer';
import { changePositionAction } from '../../../../../store/furnitureCollections/furnitureCollections.actions';

interface props {
  furniture: Furniture;
}

export type Event = React.ChangeEvent<{
  name?: string | undefined;
  value: unknown;
}>;

function positionChanger(
  prev: number,
  next: number,
  furnitures: Furniture[],
): Furniture[] {
  if (prev === next) return furnitures;

  const startId = Number(furnitures[0].id);
  const startIdxArr = Number(furnitures[0].idxArr);

  let furnituresChanged = [...furnitures];
  const removed = furnituresChanged.splice(prev, 1);
  furnituresChanged.splice(next, 0, ...removed);

  furnituresChanged = furnituresChanged.map((furniture, idx) => {
    furniture.id = startId + idx;
    furniture.idxArr = startIdxArr + idx;
    return furniture;
  });

  return furnituresChanged;
}

function comparisonChanges(
  furnitures: Furniture[],
  changeCollection: CollectionsById,
): Furniture[] {
  const compareFurnitures = furnitures.map((furniture: Furniture) => {
    if (changeCollection[furniture.id]) {
      return changeCollection[furniture.id];
    }
    return furniture;
  });

  return compareFurnitures;
}

export const GroupBtnChangePosition = ({ furniture }: props): JSX.Element => {
  const { idxArr, collection } = furniture;

  const furnitures = useSelector(
    (state: RootState) =>
      state.furnitureCollections.furnitureCollections[collection],
  );
  const maxPosition = furnitures.length - 1;

  const dispatch = useDispatch();

  const handleUp = () => {
    dispatch(changePositionAction(furniture, furnitures[idxArr - 1]));
  };
  const handleDown = () => {
    dispatch(changePositionAction(furniture, furnitures[idxArr + 1]));
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      {idxArr > 0 && <Button onClick={handleUp}>вверх</Button>}
      {idxArr < maxPosition && <Button onClick={handleDown}>вниз</Button>}
    </ButtonGroup>
  );
};
