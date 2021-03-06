import React from 'react';
import {
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ImageGallery from '../../components/common/ImageGallery';
import { ArrowLeftBoldCircleOutlineIcon } from '../../assets/Icons';
import { fetchFurnitureCollectionsThunk } from '../../store/furnitureCollections/furnitureCollections.actions';
import { RootState } from '../../store/root.reducer';
import { CollectionsById } from '../../types/furniture.types';

import { useStyles } from './CardProduct.styles';

export const CardProduct = (): JSX.Element | null => {
  const dispatch = useDispatch();

  const params = useParams<{ id: string }>();
  const classes = useStyles();
  const history = useHistory();
  const { id } = params;

  const furnitureCollectionsById: CollectionsById = useSelector(
    (state: RootState) => state.furnitureCollections.furnitureCollectionsById,
  );

  Object.keys(furnitureCollectionsById).length === 0 &&
    dispatch(fetchFurnitureCollectionsThunk());

  if (Object.keys(furnitureCollectionsById).length !== 0) {
    const {
      cost,
      description,
      images,
      lot,
      tittle,
      options,
    } = furnitureCollectionsById[id];

    window.scrollTo({ top: 0 });

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
              {`${tittle} `}
              {cost && ` ( ${cost} р. )`}
            </Typography>
            <Typography variant="subtitle1">{`${lot}, ${id}`}</Typography>
            <Typography variant="body1">{description}</Typography>

            {options?.dimensions && (
              <Typography variant="body1">
                <b>Габаритные размеры: </b>
                {options.dimensions.length} x {options.dimensions.width}
                {options.dimensions.height && ` x ${options.dimensions.height}`}
                {` см`}
              </Typography>
            )}

            {options?.dimensions2 && (
              <Typography variant="body1">
                <b>Размеры в разложенном виде: </b>
                {options.dimensions2.length} x {options.dimensions2.width}
                {options.dimensions2.height &&
                  ` x ${options.dimensions2.height}`}
                {` см`}
              </Typography>
            )}

            {options?.sleepingArea && (
              <Typography variant="body1">
                <b>Спальное место: </b>
                {options.sleepingArea.length} x {options.sleepingArea.width}
                {options.sleepingArea.height &&
                  ` x ${options.sleepingArea.height}`}
                {` см`}
              </Typography>
            )}

            {options?.upholstery && (
              <Typography variant="body1">
                <b>Обивочный материал: </b>
                {options.upholstery}
              </Typography>
            )}

            {options?.carcass && (
              <Typography variant="body1">
                <b>Каркас: </b>
                {options.carcass}
              </Typography>
            )}

            {options?.softElements && (
              <Typography variant="body1">
                <b>Мягкие элементы: </b>
                {options.softElements}
              </Typography>
            )}

            {options?.mechanism && (
              <Typography variant="body1">
                <b>Механизм раскладки: </b>
                {options.mechanism}
              </Typography>
            )}

            {options?.correspond && (
              <Typography variant="body1">
                <b>Изделие соответствует: </b>
                {options.correspond}
              </Typography>
            )}

            <Button color="primary" component={Link} to="/ServiceConditions">
              Гарантийное обязательство
            </Button>
          </div>
        </Grid>
      </Container>
    );
  } else {
    return null;
  }
};
