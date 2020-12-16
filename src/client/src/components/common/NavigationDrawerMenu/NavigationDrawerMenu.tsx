import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Link from './Link';
import React from 'react';
import { Anchor } from './NavigationDrawerMenu.types';
import { Box, IconButton } from '@material-ui/core';
import { LinkProps } from './Link/Link.types';
import { Locations } from '../../../constants/locations';
import { uid } from 'uid';
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

  const NavLinksValue: LinkProps[] = [
    {
      tittle: 'Home',
      location: Locations.Index,
      icon: <HomeIcon />,
    },
    {
      tittle: 'Divider',
    },
    {
      tittle: 'Мягкая мебель',
      location: Locations.SoftFurniture,
      icon: <SofaIcon />,
    },
    {
      tittle: 'Корпусная мебель',
      location: Locations.CabinetFurniture,
      icon: <WardrobeOutlineIcon />,
    },
    {
      tittle: 'Где купить',
      location: Locations.WhereToBuy,
      icon: <MapIcon />,
    },
    {
      tittle: 'Оплата',
      location: Locations.Payment,
      icon: <WalletOutlineIcon />,
    },
  ];

  const list = (anchor: Anchor) => (
    <Box
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {NavLinksValue.map((item: LinkProps) => {
        if (item.tittle?.toLocaleLowerCase() === 'divider') {
          return <Divider key={uid()} />;
        }
        return <Link {...item} key={uid()} />;
      })}
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
