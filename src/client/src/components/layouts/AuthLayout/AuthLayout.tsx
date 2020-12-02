import { CssBaseline } from '@material-ui/core';
import React, { ReactElement } from 'react';

export const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};

interface Props {
  children: ReactElement;
}
