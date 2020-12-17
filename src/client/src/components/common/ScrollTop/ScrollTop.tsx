import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import { Fab, useScrollTrigger } from '@material-ui/core';
import { Props } from './ScrollTop.types';
import { useStyles } from './ScrollTop.styles';

function Scroll({ children }: Props) {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export const ScrollTop = () => {
  const classes = useStyles();

  return (
    <Scroll>
      <Fab color="primary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </Scroll>
  );
};
