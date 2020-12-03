import React, { ReactElement } from 'react';

export const AdminLayout = ({ children }: Props) => {
  return (
    <>
      {/* TODO: Temporary marker for testing*/}
      AdminLayout
      {children}
    </>
  );
};

interface Props {
  children: ReactElement;
}
