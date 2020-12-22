import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import CommonFade from '../CommonFade';
import {
  imgCardBelGazProm,
  imgCardBPS,
  imgCardMTB,
} from '../../../assets/Images';

import { ListItemValue } from './CreditConditions.types';
import { useStyles } from './CreditConditions.styles';

// TODO: values to DB
const values: ListItemValue[] = [
  {
    alt: 'Рассрочка по «Карте покупок»',
    img: imgCardBelGazProm,
    text: [
      `Рассрочка по «Карте покупок»`,
      `Производите оплату «Картой покупок» и получайте, 2 месяца
        рассрочки на все группы товаров и на всю сумму платежа!`,
      `Используя «Карту покупок», Вы приобретаете товары сейчас, а
        оплачиваете их стоимость позже без процентов, комиссий и переплат!
        Также возможно досрочное погашение!`,
    ],
  },
  {
    alt: 'Халва Max/Mix',
    img: imgCardMTB,
    text: [
      `Халва Max/Mix`,
      `Карта рассрочки «Халва» от МТБанка — это 2 месяца рассрочки на любой товар в нашем интернет- магазине без переплат. Купить в рассрочку по «Халве» и «Карте покупок» просто, оплата возможна несколькими способами:`,
      `- через терминал при доставке курьером (оговаривается с
    менеджером);`,
      `- по терминалу на нашем складе при самовывозе товара.`,
    ],
  },
  {
    alt: 'Карта Fun',
    img: imgCardBPS,
    text: [
      `Карта Fun`,
      `Производите оплату.`,
      `Срок погашения кредита`,
      `при отсрочке — до 2 месяцев;`,
      `при рассрочке — от 3 месяцев (в зависимости от договорных
          отношений с магазинами-партнерами);`,
      `по овердрафтному кредиту — до 36 месяцев.`,
      `Максимальная сумма 10 000 BYN;`,
      `предоставление кредитов в сумме до 5 000 BYN возможно без
          предоставления справки о доходах (кроме заявителей, получающих
          доход от предпринимательской деятельности).`,
    ],
  },
];

export const CreditConditions = (): JSX.Element => {
  const classes = useStyles();

  return (
    <CommonFade>
      <Box pt={3}>
        <Typography variant="h6" component="h2" className={classes.title}>
          Рассрочка платежа
        </Typography>

        <Grid className={classes.list}>
          {values.map(({ img, alt, text }: ListItemValue, index) => (
            <Box key={index} className={classes.listItem}>
              <img src={img} alt={alt} className={classes.img} />
              <div className={classes.text}>
                {text.map((string, index) => (
                  <Typography
                    variant="body1"
                    key={index}
                    className={classes.paragraph}
                  >
                    {string}
                  </Typography>
                ))}
              </div>
            </Box>
          ))}
        </Grid>
      </Box>
    </CommonFade>
  );
};
