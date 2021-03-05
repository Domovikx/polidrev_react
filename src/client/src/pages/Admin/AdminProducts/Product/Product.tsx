import { Container, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

import ButtonLogout from '../../../../components/common/ButtonLogout';
import ButtonUpdateProducts from '../../../../components/common/ButtonUpdateProducts';
import { Furniture } from '../../../../types/furniture.types';

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
  furniture: Furniture;
}

export const Product = (props: props): JSX.Element => {
  const classes = useStyles();

  const { furniture } = props;
  const { id, images, collection } = furniture;

  return (
    <Container className={classes.container}>
      <div className={classes.blockBtn}>
        <ButtonUpdateProducts />
        <ButtonLogout />
      </div>

      <Paper elevation={3} className={classes.paper}>
        <Typography variant="body1">
          <div>
            <b>ID:</b> {id} <br />
            <b>collection:</b> {collection} <br />
            {/* <SelectPositions furniture={furniture} /> <br /> */}
            <GroupBtnChangePosition furniture={furniture} />
            <br />
            <FieldLot furniture={furniture} />
            <FieldTittle furniture={furniture} />
            <FieldCost furniture={furniture} />
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

          <FieldImages furniture={furniture} />

          <FieldMiniDescription furniture={furniture} />
          <FieldDimensions furniture={furniture} />
          <FieldUnfoldedDimensions furniture={furniture} />
          <FieldSleepingArea furniture={furniture} />
          <FieldUpholstery furniture={furniture} />
          <FieldCarcass furniture={furniture} />
          <FieldSoftElements furniture={furniture} />
          <FieldMechanism furniture={furniture} />
          <FieldCorrespond furniture={furniture} />
        </Typography>
      </Paper>
    </Container>
  );
};
