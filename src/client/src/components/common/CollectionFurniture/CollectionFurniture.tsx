import { Grid } from '@material-ui/core';
import React from 'react';

import { furnitureCollections } from '../../../mocks/FurnitureCollections';

import { useStyles } from './CollectionFurniture.styles';
import { CollectionFurnitureProps } from './CollectionFurniture.types';
import HeaderBox from './HeaderBox';
import ItemBox from './ItemBox';

export const CollectionFurniture = (
  props: CollectionFurnitureProps,
): JSX.Element => {
  const { collection, currentValue, id } = props;
  const classes = useStyles();

  // TODO - move to DB
  const furnitureCollection = furnitureCollections[collection.collection];

  return (
    <>
      <HeaderBox collection={collection} />

      {furnitureCollection && currentValue === id && (
        <Grid className={classes.grid}>
          {furnitureCollection.map((item, index: number) => (
            <ItemBox key={index} item={item} />
          ))}
        </Grid>
      )}
    </>
  );
};
