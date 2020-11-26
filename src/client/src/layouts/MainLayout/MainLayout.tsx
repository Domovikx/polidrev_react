import React, { ReactElement } from 'react';

import Footer from '../../parts/Footer';
import Header from '../../parts/Header';

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header>{}</Header>
      {children}
      <Footer></Footer>
    </>
  );
};

interface Props {
  children: ReactElement;
}
