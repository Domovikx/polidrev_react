import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';

import AdminLayout from './components/layouts/AdminLayout';
import AuthLayout from './components/layouts/AuthLayout';
import Home from './pages/Home';
import Loader from './components/common/Loader';
import MainLayout from './components/layouts/MainLayout';
import { Locations } from './constants/locations';

const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const Payment = React.lazy(() => import('./pages/Payment'));
const SoftFurniture = React.lazy(() => import('./pages/SoftFurniture'));
const WhereToBuy = React.lazy(() => import('./pages/WhereToBuy'));
const CabinetFurniture = React.lazy(() => import('./pages/CabinetFurniture'));
const CardProduct = React.lazy(() => import('./pages/CardProduct'));

const Admin = React.lazy(() => import('./pages/Admin'));

const Authentication = React.lazy(() => import('./pages/Authentication'));
const Registration = React.lazy(() => import('./pages/Registration'));

export const Routing = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          path={[Locations.PageNotFound, Locations.Page404]}
          component={PageNotFound}
        />

        <Route path={Locations.Admin_Relative}>
          <AdminLayout>
            <Switch>
              <Route path={Locations.Admin} exact component={Admin} />
              <Route path={Locations.All} component={PageNotFound} />
            </Switch>
          </AdminLayout>
        </Route>

        <Route path={Locations.Auth_Relative}>
          <AuthLayout>
            <Switch>
              <Route
                path={Locations.Auth_Authentication}
                component={Authentication}
              />
              <Route
                path={Locations.Auth_Registration}
                component={Registration}
              />

              <Redirect
                from={Locations.Auth}
                to={Locations.Auth_Authentication}
              />
              <Redirect
                from={Locations.All}
                to={Locations.Auth_Authentication}
              />
            </Switch>
          </AuthLayout>
        </Route>

        <Route>
          <MainLayout>
            <Switch>
              <Route path={Locations.Index} exact component={Home} />
              <Route path={Locations.SoftFurniture} component={SoftFurniture} />
              <Route
                path={Locations.CabinetFurniture}
                component={CabinetFurniture}
              />
              <Route path={Locations.WhereToBuy} component={WhereToBuy} />
              <Route path={Locations.Payment} component={Payment} />
              <Route path={Locations.CardProduct_id} component={CardProduct} />

              <Route path={Locations.All} component={PageNotFound} />
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
