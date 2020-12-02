import * as React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './constants/routes';

import AdminLayout from './components/layouts/AdminLayout';
import MainLayout from './components/layouts/MainLayout';

import Loader from './components/common/Loader';

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
          <Route
            path={[routes.pageNotFound, routes.page404]}
            component={PageNotFound}
          />

          <Route path={routes.adminRelative}>
            <AdminLayout>
              <Switch>
                <Route path={routes.admin} exact component={Admin} />
                {/* TODO: temp route */}
                <Route
                  path={routes.adminRelative + 's'}
                  component={SoftFurniture}
                />
                <Route path={routes.all} component={PageNotFound} />
              </Switch>
            </AdminLayout>
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
