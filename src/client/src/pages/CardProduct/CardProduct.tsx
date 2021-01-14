import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { furnitureCollectionsById } from '../../mocks/FurnitureCollections';
import ImageGallery from '../../components/common/ImageGallery';

import { useStyles } from './CardProduct.styles';

export const CardProduct = (): JSX.Element => {
  const params = useParams();
  const classes = useStyles();
  const { id }: any = params;

  const {
    images,
    cost,
    description,
    lot,
    tittle,
  }: any = furnitureCollectionsById[id];

  return (
    <Container>
      <Grid className={classes.grid}>
        <ImageGallery images={images} className={classes.imageGallery} />
        <div className={classes.content}>
          <Typography variant="h5" component="h2">
            {tittle}
          </Typography>
          <Typography variant="h5">{lot}</Typography>
          <Typography variant="h6">{cost} р.</Typography>
          <Typography variant="body1">{description}</Typography>
        </div>
      </Grid>
    </Container>
  );
};
