import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

import { SofaIcon } from '../../../../assets/Icons';
import { Locations } from '../../../../constants/locations';

import { useStyles } from './ItemBox.styles';
import { ItemBoxProps } from './ItemBox.types';

export const ItemBox = (props: ItemBoxProps): JSX.Element => {
  const { item } = props;
  const { cost, miniDescription, tittle, images, lot, id, options } = item;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.cardActionArea}
        component={Link}
        to={Locations.CardProduct_relative + id}
      >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <SofaIcon />
            </Avatar>
          }
          title={tittle}
          subheader={`lot: ${lot}, id:${id}`}
        />

        <Box className={classes.cardMediaWrapper}>
          <CardMedia
            className={classes.media}
            image={images[0]}
            title={tittle}
          />
        </Box>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {miniDescription && (
              <>
                {miniDescription}
                <br />
              </>
            )}
            {options?.dimensions && options.dimensions.length != 0 && (
              <>
                {`Габаритные размеры: `}
                {options.dimensions.length} x {options.dimensions.width}
                {options.dimensions.height && ` x ${options.dimensions.height}`}
                {` см`}
                <br />
              </>
            )}
            {options?.dimensions2 && options.dimensions2.length != 0 && (
              <>
                {`В разложенном виде: `}
                {options.dimensions2.length} x {options.dimensions2.width}
                {options.dimensions2.height &&
                  ` x ${options.dimensions2.height}`}
                {` см`}
                <br />
              </>
            )}
            {options?.sleepingArea && options.sleepingArea.length != 0 && (
              <>
                {`Спальное место: `}
                {options.sleepingArea.length} x {options.sleepingArea.width}
                {options.sleepingArea.height &&
                  ` x ${options.sleepingArea.height}`}
                {` см`}
              </>
            )}
          </Typography>
          {cost !== 0 && cost && (
            <Typography gutterBottom variant="h5" component="h2" align="right">
              {cost} р.
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
