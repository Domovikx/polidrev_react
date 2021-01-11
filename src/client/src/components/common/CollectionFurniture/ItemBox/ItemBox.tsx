import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

import { SofaIcon } from '../../../../assets/Icons';

import { useStyles } from './ItemBox.styles';

export const ItemBox = (props: any): JSX.Element => {
  const { item } = props;
  const {
    cost,
    description,
    miniDescription,
    tittle,
    images,
    id,
    lot,
    key,
  } = item;

  const classes = useStyles();
  const theme = useTheme();

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
          {cost} р.
        </Typography>
      </CardContent>
    </Card>
  );
};
