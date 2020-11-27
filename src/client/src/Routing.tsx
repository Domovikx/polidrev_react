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
        <Route path={['/PageNotFound', '/404']} component={PageNotFound} />

        <Route path="/admin/">
          <AdminLayout>
            <Switch>
              <Route path="/admin" exact component={Admin} />
              <Route path="/admin/s" component={SoftFurniture} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </AdminLayout>
        </Route>

        <Route>
          <MainLayout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/SoftFurniture" component={SoftFurniture} />
              <Route path="/CabinetFurniture" component={CabinetFurniture} />
              <Route path="/WhereToBuy" component={WhereToBuy} />
              <Route path="/Payment" component={Payment} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
};
