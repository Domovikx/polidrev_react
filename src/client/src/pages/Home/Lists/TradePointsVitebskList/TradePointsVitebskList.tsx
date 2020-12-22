import React from 'react';
import { List, ListItem } from '@material-ui/core';

const itemsValue: string[] = [
  'Торговый Дом «Витязь ',
  'ОАО «Витебский Хозторг» в г.Витебск и в г.Новополоцк ',
  'ОАО «Дом торговли» г.Полоцка ',
  'ООО "БелАртМебель" ',
];

export const TradePointsVitebskList = (): JSX.Element => (
  <List>
    {itemsValue.map((item, index) => (
      <ListItem key={index}>{item}</ListItem>
    ))}
  </List>
);
