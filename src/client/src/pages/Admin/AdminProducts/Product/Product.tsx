import { Container, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

import ButtonLogout from '../../../../components/common/ButtonLogout';
import ButtonUpdateProducts from '../../../../components/common/ButtonUpdateProducts';
import { Furniture } from '../../../../types/furniture.types';

import FieldTittle from './FieldTittle';
import FieldCost from './FieldCost';
import { useStyles } from './Product.styles';
import FieldLot from './FieldLot';
import FieldMiniDescription from './FieldMiniDescription';
import FieldDimensions from './FieldDimensions';
import FieldUnfoldedDimensions from './FieldUnfoldedDimensions';

interface props {
  furniture: Furniture;
}

export const Product = (props: props): JSX.Element => {
  const classes = useStyles();

  const { furniture } = props;
  const { id, images, options } = furniture;

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

          <FieldMiniDescription furniture={furniture} />
          <FieldDimensions furniture={furniture} />
          <FieldUnfoldedDimensions furniture={furniture} />

          {options?.sleepingArea && (
            <>
              <b>Спальное место: </b>
              {options.sleepingArea.length} x {options.sleepingArea.width}
              {options.sleepingArea.height &&
                ` x ${options.sleepingArea.height}`}
              {` см`}
              <br />
            </>
          )}

          {options?.upholstery && (
            <>
              <b>Обивочный материал: </b>
              {options.upholstery}
              <br />
            </>
          )}

          {options?.carcass && (
            <>
              <b>Каркас: </b>
              {options.carcass}
              <br />
            </>
          )}

          {options?.softElements && (
            <>
              <b>Мягкие элементы: </b>
              {options.softElements}
              <br />
            </>
          )}

          {options?.mechanism && (
            <>
              <b>Механизм раскладки: </b>
              {options.mechanism}
              <br />
            </>
          )}

          {options?.correspond && (
            <>
              <b>Изделие соответствует: </b>
              {options.correspond}
              <br />
            </>
          )}
        </Typography>
      </Paper>
    </Container>
  );
};
