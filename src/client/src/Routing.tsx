import * as React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdminLayout from './components/layouts/AdminLayout';
import MainLayout from './components/layouts/MainLayout';

import Loader from './components/common/Loader';

import Home from './pages/Home';
import {
  PATH__404,
  PATH__ADMIN,
  PATH__ADMIN_RELATIVE,
  PATH__ALL,
  PATH__CABINET_FURNITURE,
  PATH__INDEX,
  PATH__PAGE_NOT_FOUND,
  PATH__PAYMENT,
  PATH__SOFT_FURNITURE,
  PATH__WHERE_TO_BY,
} from './constants/pathNames';

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
          <Route
            path={[PATH__PAGE_NOT_FOUND, PATH__404]}
            component={PageNotFound}
          />

          <Route path={PATH__ADMIN_RELATIVE}>
            <AdminLayout>
              <Switch>
                <Route path={PATH__ADMIN} exact component={Admin} />
                <Route
                  path={PATH__ADMIN_RELATIVE + 's'}
                  component={SoftFurniture}
                />
                <Route path={PATH__ALL} component={PageNotFound} />
              </Switch>
            </AdminLayout>
          </Route>

          <Route>
            <MainLayout>
              <Switch>
                <Route path={PATH__INDEX} exact component={Home} />
                <Route path={PATH__SOFT_FURNITURE} component={SoftFurniture} />
                <Route
                  path={PATH__CABINET_FURNITURE}
                  component={CabinetFurniture}
                />
                <Route path={PATH__WHERE_TO_BY} component={WhereToBuy} />
                <Route path={PATH__PAYMENT} component={Payment} />
                <Route path={PATH__ALL} component={PageNotFound} />
              </Switch>
            </MainLayout>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
