import AppBar from '@material-ui/core/AppBar';
import HideOnScroll from '../../common/HideOnScroll';
import imgLogoPolidrev from '../../../assets/images/logo-polidrev.png';
import Navbar from '../../common/Navbar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { Props } from './Header.types';
import { useStyles } from './Header.styles';

export const Header = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Button
              className={classes.logoBtn}
              component={NavLink}
              to="/"
              color="inherit"
            >
              <span
                className={classes.logo}
                style={{
                  backgroundImage: `url(${imgLogoPolidrev})`,
                }}
              />
            </Button>
            <Navbar />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};
