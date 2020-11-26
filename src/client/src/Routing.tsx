/**
 * TODO 1 :
 * http://localhost:4200/SoftFurniture/any - не ловит 404
 * не работает со вложенностью
 */

import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Payment from './pages/Payment';
import SoftFurniture from './pages/SoftFurniture';
import WhereToBuy from './pages/WhereToBuy';
import Admin from './pages/Admin';
import CabinetFurniture from './pages/CabinetFurniture';

export const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/PageNotFound" component={PageNotFound} />

        <Route path="/admin/">
          <AdminLayout>
            <Switch>
              <Route path="/admin" exact component={Admin} />
            </Switch>
          </AdminLayout>
        </Route>

        <Route path="/">
          <MainLayout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/SoftFurniture" component={SoftFurniture} />
              <Route path="/CabinetFurniture" component={CabinetFurniture} />
              <Route path="/WhereToBuy" component={WhereToBuy} />
              <Route path="/Payment" component={Payment} />

              {/* TODO 1 */}
              <Route path="" component={PageNotFound} />
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
};
