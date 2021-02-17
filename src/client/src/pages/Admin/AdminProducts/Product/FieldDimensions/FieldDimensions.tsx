import React from 'react';

import { Furniture } from '../../../../../types/furniture.types';

import { FieldHeight } from './FieldHeight';
import { FieldLength } from './FieldLength';
import { FieldWidth } from './FieldWidth';

interface props {
  furniture: Furniture;
}

export const FieldDimensions = ({ furniture }: props): JSX.Element => (
  <>
    <b>Габаритные размеры: </b> <br />
    <FieldLength furniture={furniture} />
    <FieldWidth furniture={furniture} />
    <FieldHeight furniture={furniture} />
  </>
);
