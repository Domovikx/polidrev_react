import React from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { useTheme } from '@material-ui/core';

import { PlaceMark, Props } from './YandexMap.types';

/**
 * https://react-yandex-maps.now.sh/migration
 * https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/Map.html
 * https://yandex.ru/dev/maps/jsapi/doc/2.1/dg/concepts/geoobjects.html/
 */

export const YandexMap = ({ center, zoom, placeMarks }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <YMaps>
      <Map
        width="100%"
        height="100%"
        modules={[
          'control.ZoomControl',
          'control.FullscreenControl',
          'geoObject.addon.balloon',
          'geoObject.addon.hint',
        ]}
        state={{
          center,
          controls: ['zoomControl', 'fullscreenControl'],
          zoom,
        }}
      >
        {placeMarks.map(
          ({ geometry, hintContent }: PlaceMark, index: number) => (
            <Placemark
              key={index}
              geometry={geometry}
              properties={{
                hintContent,
              }}
              options={{
                iconColor: theme.palette.primary.main,
              }}
            />
          ),
        )}
      </Map>
    </YMaps>
  );
};
