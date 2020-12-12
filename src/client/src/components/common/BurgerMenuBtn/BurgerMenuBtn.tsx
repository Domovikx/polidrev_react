import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { IconButton } from '@material-ui/core';
import { useStyles } from './BurgerMenuBtn.styles';

export const BurgerMenuBtn = () => {
  const classes = useStyles();

  // TODO
  const [open, setOpen] = React.useState(false);

  // TODO
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // TODO
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <IconButton onClick={handleDrawerOpen}>
      <MenuIcon className={classes.MenuIcon} />
    </IconButton>
  );
};
