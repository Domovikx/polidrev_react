import { CssBaseline } from '@material-ui/core';
import React, { ReactElement } from 'react';

export const AuthLayout = ({ children }: Props) => {
  return (
    <>
      {/* TODO: Temporary marker for testing*/}
      AuthLayout
      <CssBaseline />
      {children}
    </>
  );
};

interface Props {
  children: ReactElement;
}
