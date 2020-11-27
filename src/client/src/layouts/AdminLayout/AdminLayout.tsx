import React, { ReactElement } from 'react';

export const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <div>AdminLayout</div>
      {children}
    </>
  );
};

interface Props {
  children: ReactElement;
}
