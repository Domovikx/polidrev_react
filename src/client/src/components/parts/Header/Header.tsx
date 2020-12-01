import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import { NavLink } from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { Props } from './Header.types';

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Polidrev
            </Typography>
            <>
              {/* TODO: Navbar */}
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
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

// TODO: Make several themes and remove or change this moment
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    navBtn: {
      alignSelf: 'stretch',
      textTransform: 'inherit',
    },
    active: {
      color: 'lightgray',
    },
  }),
);
