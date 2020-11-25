import * as React from 'react';

import Footer from './parts/Footer';
import Header from './parts/Header';

import { Routing } from './Routing';
import { BrowserRouter } from 'react-router-dom';

export const App = () => (
  <BrowserRouter>
    <Header>{}</Header>
    <Routing></Routing>
    <Footer></Footer>
  </BrowserRouter>
);
