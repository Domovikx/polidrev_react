import * as React from 'react';
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes } from './constants/routes';

import AdminLayout from './components/layouts/AdminLayout';
import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';

import Loader from './components/common/Loader';

import Home from './pages/Home';

const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const Payment = React.lazy(() => import('./pages/Payment'));
const SoftFurniture = React.lazy(() => import('./pages/SoftFurniture'));
const WhereToBuy = React.lazy(() => import('./pages/WhereToBuy'));
const CabinetFurniture = React.lazy(() => import('./pages/CabinetFurniture'));

const Admin = React.lazy(() => import('./pages/Admin'));

const Authentication = React.lazy(() => import('./pages/Authentication'));
const Registration = React.lazy(() => import('./pages/Registration'));

export const Routing = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path={[routes.pageNotFound, routes.page404]}
            component={PageNotFound}
          />

          <Route path={routes.adminRelative}>
            <AdminLayout>
              <Switch>
                <Route path={routes.admin} exact component={Admin} />
                <Route path={routes.all} component={PageNotFound} />
              </Switch>
            </AdminLayout>
          </Route>

          <Route path={routes.authRelative}>
            <AuthLayout>
              <Switch>
                <Route
                  path={routes.authentication}
                  component={Authentication}
                />
                <Route path={routes.registration} component={Registration} />

                <Redirect from={routes.auth} to={routes.authentication} />
                <Redirect from={routes.all} to={routes.authentication} />
              </Switch>
            </AuthLayout>
          </Route>

          <Route>
            <MainLayout>
              <Switch>
                <Route path={routes.index} exact component={Home} />
                <Route path={routes.softFurniture} component={SoftFurniture} />
                <Route
                  path={routes.cabinetFurniture}
                  component={CabinetFurniture}
                />
                <Route path={routes.whereToBuy} component={WhereToBuy} />
                <Route path={routes.payment} component={Payment} />
                <Route path={routes.all} component={PageNotFound} />
              </Switch>
            </MainLayout>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
