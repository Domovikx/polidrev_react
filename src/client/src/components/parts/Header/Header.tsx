import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import useTheme from '@material-ui/core/styles/useTheme';
import { Button, Container, useMediaQuery } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import HideOnScroll from '../../common/HideOnScroll';
import imgLogoPolidrev from '../../../assets/images/logo-polidrev.png';
import Navbar from '../../common/Navbar';
import NavigationDrawerMenu from '../../common/NavigationDrawerMenu';
import { Locations } from '../../../constants/locations';

import { useStyles } from './Header.styles';

export const Header = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Container className={classes.Container}>
            <Button
              className={classes.logoBtn}
              component={NavLink}
              to={Locations.Index}
            >
              <img
                src={imgLogoPolidrev}
                alt="Polidrev"
                className={classes.img}
              />
            </Button>
            {mdUp ? <Navbar /> : <NavigationDrawerMenu />}
          </Container>
        </AppBar>
      </HideOnScroll>

      <Toolbar />
    </>
  );
};
