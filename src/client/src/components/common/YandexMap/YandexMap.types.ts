// TODO: change interfaces
export interface PlaceMark {
  geometry: [];
  hintContent?: string;
}

export interface Props {
  center: [number, number];
  zoom: number;
  placeMarks: [PlaceMark];
}
