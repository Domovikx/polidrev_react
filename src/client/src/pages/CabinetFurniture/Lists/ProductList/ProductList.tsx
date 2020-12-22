import React from 'react';
import { List, ListItem } from '@material-ui/core';

import { Props } from './ProductList.types';
import { useStyles } from './ProductList.styles';

const itemsValue: string[] = [
  'Кухни под заказ ',
  'Угловые кухни ',
  'Кухни из массива ',
  'Прямые кухни ',
  'Кухни бюджетного варианта ',
  'Корпусная мебель для кухни ',
  'Кухонная мебель ',
  'Прихожие на заказ ',
  'Кровати-трансформеры ',
  'Мебель-трансформер ',
  'Изготовление торговой мебели ',
  'Мебель для учреждений ',
  'Корпусные шкафы-купе ',
  'Угловая стенка - изготовление ',
  'Гардеробные ',
  'Мебель для ванной ',
  'Компьютерные столы ',
  'Шкафы-купе в спальню ',
  'Офисная мебель ',
  'Шкафы для офиса ',
];

export const ProductList = (): JSX.Element => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {itemsValue.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  );
};
