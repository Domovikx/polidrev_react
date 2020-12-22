import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import CommonFade from '../CommonFade';
import {
  imgCash,
  imgCardPayment,
  imgErip,
  imgInternetBank,
} from '../../../assets/Images';

import { ListItemValue } from './PaymentMethods.types';
import { useStyles } from './PaymentMethods.styles';

// TODO: to DB
const values: ListItemValue[] = [
  {
    img: imgCash,
    text: 'Наличными',
  },
  {
    img: imgCardPayment,
    text: 'Карточкой',
  },
  {
    img: imgErip,
    text: 'ЕРИП',
  },
  {
    img: imgInternetBank,
    text: 'Интернет-банк',
  },
];

export const PaymentMethods = (): JSX.Element => {
  const classes = useStyles();

  return (
    <CommonFade>
      <Box pt={3}>
        <Typography variant="h6" component="h2" className={classes.title}>
          Удобные способы оплаты
        </Typography>

        <Grid className={classes.list}>
          {values.map(({ img, text }: ListItemValue, index) => (
            <Box key={index} className={classes.paper}>
              <img src={img} alt={text} className={classes.img} />
              <Typography variant="body1" className={classes.text}>
                {text}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Box>
    </CommonFade>
  );
};
