import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { uid } from 'uid';

import { Locations } from '../../../constants/locations';
import {
  HomeIcon,
  MapIcon,
  MenuIcon,
  SofaIcon,
  WalletOutlineIcon,
  WardrobeOutlineIcon,
} from '../../../assets/Icons';

import Link from './Link';
import { Anchor } from './NavigationDrawerMenu.types';
import { LinkProps } from './Link/Link.types';
import { useStyles } from './NavigationDrawerMenu.styles';

export const NavigationDrawerMenu = (): JSX.Element => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
    left: false,
    right: false,
    top: false,
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
      icon: <HomeIcon />,
      location: Locations.Index,
      title: 'Home',
    },
    {
      title: 'Divider',
    },
    {
      icon: <SofaIcon />,
      location: Locations.SoftFurniture,
      title: 'Мягкая мебель',
    },
    {
      icon: <WardrobeOutlineIcon />,
      location: Locations.CabinetFurniture,
      title: 'Корпусная мебель',
    },
    {
      icon: <MapIcon />,
      location: Locations.WhereToBuy,
      title: 'Где купить',
    },
    {
      icon: <WalletOutlineIcon />,
      location: Locations.Payment,
      title: 'Оплата',
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
        if (item.title?.toLocaleLowerCase() === 'divider') {
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
