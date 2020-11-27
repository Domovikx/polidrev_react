import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../parts/Footer';
import Header from '../../parts/Header';

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header>{}</Header>
      {children}
      Links by tests <br />
      <Link to="/admin">/admin</Link> <br />
      <Link to="/admin/">/admin/</Link> <br />
      <Link to="/admin/s">/admin/s</Link> <br />
      <Link to="/admin/asdfasdfafgsfg">/admin/asdfasdfafgsfg</Link> <br />
      <Link to="/SoftFurniture/asdfasdfafgsfg">
        /SoftFurniture/asdfasdfafgsfg
      </Link>{' '}
      <br />
      <Footer></Footer>
    </>
  );
};

interface Props {
  children: ReactElement;
}
