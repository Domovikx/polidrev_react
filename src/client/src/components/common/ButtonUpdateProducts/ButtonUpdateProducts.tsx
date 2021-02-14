import { Button } from '@material-ui/core';
import { useAtom } from 'jotai';
import React from 'react';

import { updateFurnitureCollectionsAtom } from '../../../storeAtom/furniture.atom';

export const ButtonUpdateProducts = (): JSX.Element => {
  const [furnitureCollection, update] = useAtom(updateFurnitureCollectionsAtom);

  const updateProducts = async () => {
    furnitureCollection && update(furnitureCollection);
  };

  return (
    <Button color="primary" onClick={updateProducts}>
      Сохранить
    </Button>
  );
};
