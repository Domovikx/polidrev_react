import React from 'react';
import { Fade } from '@material-ui/core';
import { Props } from './OnFade.types';

export const OnFade = (props: Props) => {
  const { children, timeout = 800, show = true } = props;

  return (
    <Fade in={show} timeout={timeout}>
      {children}
    </Fade>
  );
};
