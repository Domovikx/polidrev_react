import { Container, Paper } from '@material-ui/core';
import * as React from 'react';

import ButtonLogout from '../../../../components/common/ButtonLogout';
import ButtonUpdateProducts from '../../../../components/common/ButtonUpdateProducts';
import { useFurniture } from '../../../../hooks/useFurniture';

import { useStyles } from './Product.styles';
import FieldTittle from './FieldTittle';
import FieldCost from './FieldCost';
import FieldLot from './FieldLot';
import FieldMiniDescription from './FieldMiniDescription';
import FieldDimensions from './FieldDimensions';
import FieldUnfoldedDimensions from './FieldUnfoldedDimensions';
import FieldSleepingArea from './FieldSleepingArea';
import FieldUpholstery from './FieldUpholstery';
import FieldCarcass from './FieldCarcass';
import FieldSoftElements from './FieldSoftElements';
import FieldMechanism from './FieldMechanism';
import FieldCorrespond from './FieldCorrespond';
import FieldImages from './FieldImages';
import GroupBtnChangePosition from './GroupBtnChangePosition';

interface props {
  furnitureId: string | number;
}

export const Product = ({ furnitureId }: props): JSX.Element => {
  const classes = useStyles();

  const { furniture } = useFurniture(furnitureId);
  const { id, images, collection } = furniture;

  return (
    <Container className={classes.container}>
      <div className={classes.blockBtn}>
        <ButtonUpdateProducts />
        <ButtonLogout />
      </div>

      <Paper elevation={3} className={classes.paper}>
        <div>
          <b>ID:</b> {id} <br />
          <b>collection:</b> {collection} <br />
          <GroupBtnChangePosition furniture={furniture} />
          <br />
          <FieldLot furnitureId={furnitureId} />
          <FieldTittle furnitureId={furnitureId} />
          <FieldCost furnitureId={furnitureId} />
        </div>

        <div>
          {images.map((item, index) => (
            <a
              href={item}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img src={item} alt={item} className={classes.img} />
            </a>
          ))}
        </div>

        <FieldImages furnitureId={furnitureId} />

        <FieldMiniDescription furnitureId={furnitureId} />
        <FieldDimensions furnitureId={furnitureId} />
        <FieldUnfoldedDimensions furnitureId={furnitureId} />
        <FieldSleepingArea furnitureId={furnitureId} />
        <FieldUpholstery furnitureId={furnitureId} />
        <FieldCarcass furnitureId={furnitureId} />
        <FieldSoftElements furnitureId={furnitureId} />
        <FieldMechanism furnitureId={furnitureId} />
        <FieldCorrespond furnitureId={furnitureId} />
      </Paper>
    </Container>
  );
};
