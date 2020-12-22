import { PlacemarkGeometry } from 'react-yandex-maps';

export interface Props {
  center: PlacemarkGeometry;
  zoom: number;
  placeMarks: PlaceMark[];
}
export interface PlaceMark {
  geometry: PlacemarkGeometry;
  hintContent?: string;
}
