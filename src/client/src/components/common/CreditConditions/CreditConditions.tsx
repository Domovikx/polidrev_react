import CommonFade from '../CommonFade';
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { ListItemValue } from './CreditConditions.types';
import { uid } from 'uid';
import { useStyles } from './CreditConditions.styles';
import {
  imgCardBelGazProm,
  imgCardBPS,
  imgCardMTB,
} from '../../../assets/Images';

// TODO: values to DB
const values: ListItemValue[] = [
  {
    img: imgCardBelGazProm,
    alt: 'Рассрочка по «Карте покупок»',
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
    img: imgCardMTB,
    alt: 'Халва Max/Mix',
    text: [
      `Халва Max/Mix`,
      `Карта рассрочки «Халва» от МТБанка — это 2 месяца рассрочки на любой товар в нашем интернет- магазине без переплат. Купить в рассрочку по «Халве» и «Карте покупок» просто, оплата возможна несколькими способами:`,
      `- через терминал при доставке курьером (оговаривается с
    менеджером);`,
      `- по терминалу на нашем складе при самовывозе товара.`,
    ],
  },
  {
    img: imgCardBPS,
    alt: 'Карта Fun',
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

export const CreditConditions = () => {
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
          Рассрочка платежа
        </Typography>

        <Grid className={classes.list}>
          {values.map(({ img, alt, text }: ListItemValue) => {
            return (
              <Box key={uid()} className={classes.listItem}>
                <img src={img} alt={alt} className={classes.img} />
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={classes.text}
                >
                  {text.map((string) => (
                    <p className={classes.paragraph}>{string}</p>
                  ))}
                </Typography>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </CommonFade>
  );
};
