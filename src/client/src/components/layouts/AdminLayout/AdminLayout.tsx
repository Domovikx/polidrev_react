import React, { ReactElement } from 'react';

export const AdminLayout = ({ children }: Props): JSX.Element => (
  <>{children}</>
);

interface Props {
  children: ReactElement;
}
