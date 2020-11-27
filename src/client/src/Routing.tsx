import * as React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import Loader from './common/Loader';

import Home from './pages/Home';

const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const Payment = React.lazy(() => import('./pages/Payment'));
const SoftFurniture = React.lazy(() => import('./pages/SoftFurniture'));
const WhereToBuy = React.lazy(() => import('./pages/WhereToBuy'));
const Admin = React.lazy(() => import('./pages/Admin'));
const CabinetFurniture = React.lazy(() => import('./pages/CabinetFurniture'));

export const Routing = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Router>
  );
};
