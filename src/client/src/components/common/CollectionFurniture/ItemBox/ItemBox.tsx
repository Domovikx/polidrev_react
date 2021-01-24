import {
  Avatar,
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
  const { cost, miniDescription, tittle, images, lot, id } = item;

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
          subheader={`${lot}, ${id}`}
        />

        <CardMedia className={classes.media} image={images[0]} title={tittle} />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {miniDescription}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="right">
            {cost} {cost && <>р.</>}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
