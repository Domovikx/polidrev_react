import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

import { SofaIcon } from '../../../../assets/Icons';

import { useStyles } from './ItemBox.styles';

export const ItemBox = (props: any): JSX.Element => {
  const { item } = props;
  const { cost, miniDescription, tittle, images, lot } = item;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <SofaIcon />
          </Avatar>
        }
        title={tittle}
        subheader={lot}
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
    </Card>
  );
};
