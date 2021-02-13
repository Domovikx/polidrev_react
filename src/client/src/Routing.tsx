import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import { useAtom } from 'jotai';

import AdminLayout from './components/layouts/AdminLayout';
import AuthLayout from './components/layouts/AuthLayout';
import Home from './pages/Home';
import Loader from './components/common/Loader';
import MainLayout from './components/layouts/MainLayout';
import AdminProducts from './pages/Admin/AdminProducts';
import { Locations } from './constants/locations';
import { isAuthAtom } from './storeAtom/auth.atom';

const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const Payment = React.lazy(() => import('./pages/Payment'));
const SoftFurniture = React.lazy(() => import('./pages/SoftFurniture'));
const WhereToBuy = React.lazy(() => import('./pages/WhereToBuy'));
const CabinetFurniture = React.lazy(() => import('./pages/CabinetFurniture'));
const CardProduct = React.lazy(() => import('./pages/CardProduct'));

const Admin = React.lazy(() => import('./pages/Admin'));

const Authentication = React.lazy(() => import('./pages/Authentication'));

export const Routing = (): JSX.Element => {
  const [isAuth] = useAtom(isAuthAtom);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path={[Locations.PageNotFound, Locations.Page404]}
            component={PageNotFound}
          />

          {isAuth ? (
            <Route path={Locations.Admin_Relative}>
              <AdminLayout>
                <Switch>
                  <Route path={Locations.Admin} exact component={Admin} />
                  <Route
                    path={Locations.Admin_Products}
                    exact
                    component={AdminProducts}
                  />

                  <Route path={Locations.All} component={PageNotFound} />
                </Switch>
              </AdminLayout>
            </Route>
          ) : (
            <Route path={Locations.Admin_Relative}>
              <AdminLayout>
                <Switch>
                  <Redirect from={Locations.All} to={Locations.Index} />
                </Switch>
              </AdminLayout>
            </Route>
          )}

          <Route path={Locations.Auth_Relative}>
            <AuthLayout>
              <Switch>
                <Route
                  path={Locations.Auth_Authentication}
                  component={Authentication}
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
                <Route
                  path={Locations.SoftFurniture_id}
                  component={SoftFurniture}
                />
                <Route
                  path={Locations.SoftFurniture}
                  component={SoftFurniture}
                />
                <Route
                  path={Locations.CabinetFurniture}
                  component={CabinetFurniture}
                />
                <Route path={Locations.WhereToBuy} component={WhereToBuy} />
                <Route path={Locations.Payment} component={Payment} />
                <Route
                  path={Locations.CardProduct_id}
                  component={CardProduct}
                />

                <Route path={Locations.All} component={PageNotFound} />
              </Switch>
            </MainLayout>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
