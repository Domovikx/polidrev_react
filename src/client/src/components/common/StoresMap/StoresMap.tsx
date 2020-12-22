import React from 'react';

import YandexMap from '../YandexMap';

export const StoresMap = (): JSX.Element => {
  //TODO: to DB
  const center = [55.184217, 30.202869];
  const zoom = 11;
  const placeMarks = [
    {
      geometry: [55.13074, 30.255402],
      hintContent: `Склад-магазин "Полидрев"<br> аг. Октябрьская, ул.Октябрьская, 7`,
    },
    {
      geometry: [55.173679, 30.212858],
      hintContent: `ООО "БелАртМебель"<br> ул.Чкалова, 19/1`,
    },
    {
      geometry: [55.169509, 30.127024],
      hintContent: `ООО "БелАртМебель"<br> ул.39-й Армии, 22`,
    },
    {
      geometry: [55.198119, 30.206705],
      hintContent: `ООО "БелАртМебель"<br> ул.Ленина, 48`,
    },
    {
      geometry: [55.197764, 30.189466],
      hintContent: `ООО "БелАртМебель"<br> ул.Советской Армии, 4`,
    },
    {
      geometry: [55.488188, 28.779776],
      hintContent: `Торговый Дом (г.Полоцк)<br> г.Полоцк ул.Гоголя, 16`,
    },
    {
      geometry: [55.174049, 30.15136],
      hintContent: `ОАО "Витебский Хозторг"<br> ул.1-я Пролетарская, 3`,
    },
    {
      geometry: [55.488188, 28.779776],
      hintContent: `ОАО "Витебский Хозторг"<br> ул.Чкалова, 17/2`,
    },
    {
      geometry: [55.538779, 28.637483],
      hintContent: `ОАО "Витебский Хозторг"<br> г.Новополоцк ул.Молодежная, 40`,
    },
  ];

  const props = { center, placeMarks, zoom };

  return <YandexMap {...props} />;
};
