import React from 'react';
import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';

import ImageGallery from '../../components/common/ImageGallery';
import { ArrowLeftBoldCircleOutlineIcon } from '../../assets/Icons';
import { furnitureCollectionsById } from '../../mocks/FurnitureCollections';
import { FurnitureCollection } from '../../mocks/FurnitureCollections.types';

import { useStyles } from './CardProduct.styles';

export const CardProduct = (): JSX.Element => {
  const params = useParams<{ id: string }>();
  const classes = useStyles();
  const history = useHistory();
  const { id } = params;

  const {
    images,
    cost,
    description,
    lot,
    tittle,
  }: FurnitureCollection = furnitureCollectionsById[id];

  return (
    <Container className={classes.container}>
      <IconButton
        className={classes.iconButton}
        onClick={() => {
          history.goBack();
        }}
      >
        <ArrowLeftBoldCircleOutlineIcon className={classes.icon} />
      </IconButton>

      <Grid className={classes.grid}>
        <ImageGallery images={images} />
        <div className={classes.content}>
          <Typography variant="h5" component="h2">
            {tittle}
          </Typography>
          <Typography variant="h5">{lot}</Typography>
          <Typography variant="h6">
            {cost} {cost && <>р.</>}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </div>
      </Grid>
    </Container>
  );
};
