import React from 'react';
import { List, ListItem } from '@material-ui/core';

const itemsValue: string[] = [
  'Богатый выбор материалов от известных производителей (МДФ, ЛДСП, массив). ',
  'Широкая цветовая палитра. ',
  'Качественная и надежная фурнитура. ',
  'Быстрые сроки изготовления - от 3 дней. ',
  'Индивидуальный подход. ',
];

export const AdvantagesList = (): JSX.Element => (
  <List>
    {itemsValue.map((item, index) => (
      <ListItem key={index}>{item}</ListItem>
    ))}
  </List>
);
