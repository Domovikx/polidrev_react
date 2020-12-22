import React, { ReactElement } from 'react';

export const AdminLayout = ({ children }: Props): JSX.Element => (
  <>
    {/* TODO: Temporary marker for testing*/}
    AdminLayout
    {children}
  </>
);

interface Props {
  children: ReactElement;
}
