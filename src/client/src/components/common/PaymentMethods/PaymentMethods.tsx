import React from 'react';
import { useStyles } from './PaymentMethods.styles';
import {
  imgCash,
  imgCardPayment,
  imgErip,
  imgInternetBank,
} from '../../../assets/Images';

/** !!! file in progress */

const paymentDB = [
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
    <>
      {paymentDB.map(({ img, text }) => {
        return (
          <div>
            <img src={img} alt={text} className={classes.img} />
            <p>{text}</p>
          </div>
        );
      })}
    </>
  );
};
