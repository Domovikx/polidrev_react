import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/root.reducer';
import { fetchFurnitureCollectionsThunk } from '../../../store/furnitureCollections/furnitureCollections.actions';

import { useStyles } from './CollectionFurniture.styles';
import { CollectionFurnitureProps } from './CollectionFurniture.types';
import HeaderBox from './HeaderBox';
import ItemBox from './ItemBox';

export const CollectionFurniture = (
  props: CollectionFurnitureProps,
): JSX.Element => {
  const classes = useStyles();

  const { collection, currentValue, id } = props;

  const furnitureCollections = useSelector(
    (state: RootState) => state.furnitureCollections.furnitureCollections,
  );

  const dispatch = useDispatch();
  Object.keys(furnitureCollections).length === 0 &&
    dispatch(fetchFurnitureCollectionsThunk());

  const furnitureCollection = furnitureCollections[collection.collection];

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
