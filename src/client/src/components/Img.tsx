import * as React from 'react';
import { createUseStyles } from 'react-jss';

import logoImg from './favicon-removebg-preview.png';

export interface Props {}

const styles = createUseStyles({
  '@keyframes rotated': {
    '0%': {
      transform: 'rotate(0deg)',
      opacity: 0.3,
    },
    '50%': {
      transform: 'rotate(180deg)',
      opacity: 1,
    },
    '100%': {
      transform: 'rotate(360deg)',
      opacity: 0.3,
    },
  },
  container: {
    height: '100px',
    animationName: '$rotated',
    animationDuration: 5000,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
});

export const Img = ({}: Props) => {
  return (
    <>
      <img className={styles().container} src={logoImg} alt={logoImg} />
    </>
  );
};
