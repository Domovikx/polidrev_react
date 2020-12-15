import React from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
// import { Props } from './YandexMap.types';
import { uid } from 'uid';
import { useTheme } from '@material-ui/core';

/**
 * https://react-yandex-maps.now.sh/migration
 * https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/Map.html
 * https://yandex.ru/dev/maps/jsapi/doc/2.1/dg/concepts/geoobjects.html/
 */

// TODO: any to props
export const YandexMap = ({ center, zoom, placeMarks }: any) => {
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
          zoom,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
      >
        {/* // TODO: any to props */}
        {placeMarks.map(({ geometry, hintContent }: any) => (
          <Placemark
            key={uid()}
            geometry={geometry}
            properties={{
              hintContent,
            }}
            options={{
              iconColor: theme.palette.primary.main,
            }}
          />
        ))}
      </Map>
    </YMaps>
  );
};
