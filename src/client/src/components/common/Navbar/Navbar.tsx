import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from './Navbar.styles';

export const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <Button
        component={NavLink}
        to="/SoftFurniture"
        className={classes.btn}
        activeClassName={classes.active}
      >
        Мягкая мебель
      </Button>
      <Button
        component={NavLink}
        to="/CabinetFurniture"
        className={classes.btn}
        activeClassName={classes.active}
      >
        Корпусная мебель
      </Button>
      <Button
        component={NavLink}
        to="/WhereToBuy"
        className={classes.btn}
        activeClassName={classes.active}
      >
        Где купить
      </Button>
      <Button
        component={NavLink}
        to="/Payment"
        className={classes.btn}
        activeClassName={classes.active}
      >
        Оплата
      </Button>
    </>
  );
};
