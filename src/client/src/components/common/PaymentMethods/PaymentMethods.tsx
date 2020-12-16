import CommonFade from '../CommonFade';
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { ListItemValue } from './PaymentMethods.types';
import { uid } from 'uid';
import { useStyles } from './PaymentMethods.styles';
import {
  imgCash,
  imgCardPayment,
  imgErip,
  imgInternetBank,
} from '../../../assets/Images';

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

export const PaymentMethods = () => {
  const classes = useStyles();

  return (
    <CommonFade>
      <Box pt={3}>
        <Typography
          color="textPrimary"
          variant="h6"
          component="h2"
          className={classes.tittle}
        >
          Удобные способы оплаты
        </Typography>

        <Grid className={classes.list}>
          {values.map(({ img, text }: ListItemValue) => {
            return (
              <Box key={uid()} className={classes.paper}>
                <img src={img} alt={text} className={classes.img} />
                <Typography
                  variant="body1"
                  className={classes.text}
                  color="textPrimary"
                >
                  {text}
                </Typography>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </CommonFade>
  );
};
