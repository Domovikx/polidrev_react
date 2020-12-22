import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { Locations } from '../../../constants/locations';

import { useStyles } from './Navbar.styles';

export const Navbar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Button
        component={NavLink}
        to={Locations.SoftFurniture}
        className={classes.btn}
        activeClassName={classes.active}
      >
        Мягкая мебель
      </Button>
      <Button
        component={NavLink}
        to={Locations.CabinetFurniture}
        className={classes.btn}
        activeClassName={classes.active}
      >
        Корпусная мебель
      </Button>
      <Button
        component={NavLink}
        to={Locations.WhereToBuy}
        className={classes.btn}
        activeClassName={classes.active}
      >
        Где купить
      </Button>
      <Button
        component={NavLink}
        to={Locations.Payment}
        className={classes.btn}
        activeClassName={classes.active}
      >
        Оплата
      </Button>
    </>
  );
};
