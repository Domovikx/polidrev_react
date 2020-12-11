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
        color="inherit"
        className={classes.navBtn}
        activeClassName={classes.active}
      >
        Мягкая мебель
      </Button>
      <Button
        component={NavLink}
        to="/CabinetFurniture"
        color="inherit"
        className={classes.navBtn}
        activeClassName={classes.active}
      >
        Корпусная мебель
      </Button>
      <Button
        component={NavLink}
        to="/WhereToBuy"
        color="inherit"
        className={classes.navBtn}
        activeClassName={classes.active}
      >
        Где купить
      </Button>
      <Button
        component={NavLink}
        to="/Payment"
        color="inherit"
        className={classes.navBtn}
        activeClassName={classes.active}
      >
        Оплата
      </Button>
    </>
  );
};
