import React from 'react';

import YandexMap from '../YandexMap';

export const EnterpriseMap = (): JSX.Element => {
  //TODO: to DB
  const center = [55.13074, 30.255402];
  const zoom = 11;
  const placeMarks = [
    {
      geometry: [55.13074, 30.255402],
      hintContent: `Склад-магазин "Полидрев"<br> аг. Октябрьская, ул.Октябрьская, 7`,
    },
  ];

  const props = { center, placeMarks, zoom };

  return <YandexMap {...props} />;
};
