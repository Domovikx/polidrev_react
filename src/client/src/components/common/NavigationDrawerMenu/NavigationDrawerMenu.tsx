import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { Anchor } from './NavigationDrawerMenu.types';
import { Box, IconButton } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from './NavigationDrawerMenu.styles';

import {
  HomeIcon,
  MapIcon,
  MenuIcon,
  SofaIcon,
  WalletOutlineIcon,
  WardrobeOutlineIcon,
} from '../../../assets/Icons';

export const NavigationDrawerMenu = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem button to="/" component={NavLink}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={'Home'} />
      </ListItem>
      <Divider />
      <List>
        {/* TODO: refactoring, use array and map */}
        <ListItem button to="/SoftFurniture" component={NavLink}>
          <ListItemIcon>
            <SofaIcon />
          </ListItemIcon>
          <ListItemText primary={'Мягкая мебель'} />
        </ListItem>
        <ListItem button to="/CabinetFurniture" component={NavLink}>
          <ListItemIcon>
            <WardrobeOutlineIcon />
          </ListItemIcon>
          <ListItemText primary={'Корпусная мебель'} />
        </ListItem>
        <ListItem button to="/WhereToBuy" component={NavLink}>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary={'Где купить'} />
        </ListItem>
        <ListItem button to="/Payment" component={NavLink}>
          <ListItemIcon>
            <WalletOutlineIcon />
          </ListItemIcon>
          <ListItemText primary={'Оплата'} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer('right', true)}>
        <MenuIcon className={classes.MenuIcon} />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </>
  );
};
