import AppBar from '@material-ui/core/AppBar';
import BurgerMenuBtn from '../../common/BurgerMenuBtn';
import HideOnScroll from '../../common/HideOnScroll';
import imgLogoPolidrev from '../../../assets/images/logo-polidrev.png';
import Navbar from '../../common/Navbar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Props } from './Header.types';
import { useStyles } from './Header.styles';

export const Header = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Container className={classes.Container}>
            <Button className={classes.logoBtn} component={NavLink} to="/">
              <img src={imgLogoPolidrev} alt="Polidrev" />
            </Button>

            <Navbar />

            <BurgerMenuBtn />
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};
