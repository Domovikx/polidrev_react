import AppBar from '@material-ui/core/AppBar';
import CardMedia from '@material-ui/core/CardMedia';
import HideOnScroll from '../../common/HideOnScroll';
import image from '../../../assets/images/logo-polidrev.webp';
import Navbar from '../../common/Navbar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Props } from './Header.types';
import { useStyles } from './Header.styles';
import { CardActionArea } from '@material-ui/core';

export const Header = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Polidrev"
                title="Polidrev HOME"
                className={classes.media}
                image={image}
              />
            </CardActionArea>
            <Navbar />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};
