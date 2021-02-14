import { Grid } from '@material-ui/core';
import React from 'react';

import { useFurnitureCollections } from '../../../hooks/useFurnitureCollections.hook';

import { useStyles } from './CollectionFurniture.styles';
import { CollectionFurnitureProps } from './CollectionFurniture.types';
import HeaderBox from './HeaderBox';
import ItemBox from './ItemBox';

export const CollectionFurniture = (
  props: CollectionFurnitureProps,
): JSX.Element => {
  const { collection, currentValue, id } = props;
  const classes = useStyles();

  const furnitureCollections = useFurnitureCollections();

  // TODO - move to DB
  const furnitureCollection =
    furnitureCollections && furnitureCollections[collection.collection];

  return (
    <>
      <HeaderBox collection={collection} />

      {furnitureCollection && currentValue === id && (
        <Grid className={classes.furnitureCollection}>
          {furnitureCollection.map((item, index: number) => (
            <ItemBox key={index} item={item} />
          ))}
        </Grid>
      )}
    </>
  );
};
