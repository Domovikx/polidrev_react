import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';

import { useStyles } from './CollectionFurniture.styles';
import { CollectionFurnitureProps } from './CollectionFurniture.types';

export const CollectionFurniture = (
  props: CollectionFurnitureProps,
): JSX.Element => {
  const { collection } = props;

  const classes = useStyles();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid className={classes.grid}>
      <div className={classes.center}>
        <img
          alt={collection.title}
          className={classes.img}
          src={collection.img}
        />
        <Typography variant="h6" component="h2" className={classes.title}>
          {collection.title}
        </Typography>
      </div>
      <div>
        {smUp && (
          <Typography variant="h6" component="h2" className={classes.title}>
            {collection.subtitle}
          </Typography>
        )}
        <Typography variant="body1" className={classes.paragraph}>
          {collection.description}
        </Typography>
      </div>
    </Grid>
  );
};
