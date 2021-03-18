import React from 'react';

import { FieldHeight } from './FieldHeight';
import { FieldLength } from './FieldLength';
import { FieldWidth } from './FieldWidth';

interface props {
  furnitureId: string | number;
}

export const FieldDimensions = ({ furnitureId }: props): JSX.Element => (
  <>
    <b>Габаритные размеры: </b> <br />
    <FieldLength furnitureId={furnitureId} />
    <FieldWidth furnitureId={furnitureId} />
    <FieldHeight furnitureId={furnitureId} />
    <br />
  </>
);
