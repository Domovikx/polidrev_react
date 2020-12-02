import React, { ReactElement } from 'react';

export const AuthLayout = ({ children }: Props) => {
  return (
    <>
      Auth Layout
      {children}
    </>
  );
};

interface Props {
  children: ReactElement;
}
