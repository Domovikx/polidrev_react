import { Container, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

import ButtonLogout from '../../../../components/common/ButtonLogout';
import ButtonUpdateProducts from '../../../../components/common/ButtonUpdateProducts';
import { Furniture } from '../../../../types/furniture.types';

import FieldPrice from './FieldPrice';
import { useStyles } from './Product.styles';

interface props {
  furniture: Furniture;
}

export const Product = (props: props): JSX.Element => {
  const classes = useStyles();

  const { furniture } = props;
  const {
    id,
    cost,
    description,
    images,
    lot,
    tittle,
    miniDescription,
    options,
  } = furniture;

  return (
    <Container className={classes.container}>
      <div className={classes.blockBtn}>
        <ButtonUpdateProducts />
        <ButtonLogout />
      </div>

      <Paper elevation={3} className={classes.paper}>
        <Typography variant="body1">
          <p>
            <b>ID:</b> {id} <b>lot:</b> {lot}
            <br />
            <b>Название:</b> {tittle}
            <br />
            <FieldPrice furniture={furniture} />
          </p>
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

          {miniDescription && (
            <>
              <b>{`Мини описание: `}</b>
              {miniDescription}
              <br />
            </>
          )}

          {options?.dimensions && (
            <>
              <b>Габаритные размеры: </b>
              {options.dimensions.length} x {options.dimensions.width}
              {options.dimensions.height && ` x ${options.dimensions.height}`}
              {` см`}
              <br />
            </>
          )}

          {options?.dimensions2 && (
            <>
              <b>Размеры в разложенном виде: </b>
              {options.dimensions2.length} x {options.dimensions2.width}
              {options.dimensions2.height && ` x ${options.dimensions2.height}`}
              {` см`}
              <br />
            </>
          )}

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
