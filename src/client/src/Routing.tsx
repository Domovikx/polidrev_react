import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import CabinetFurniture from './pages/CabinetFurniture';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Payment from './pages/Payment';
import SoftFurniture from './pages/SoftFurniture';
import WhereToBuy from './pages/WhereToBuy';

export const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/SoftFurniture" exact component={SoftFurniture} />
      <Route path="/CabinetFurniture" exact component={CabinetFurniture} />
      <Route path="/WhereToBuy" exact component={WhereToBuy} />
      <Route path="/Payment" exact component={Payment} />
      <Route path="" component={PageNotFound} />
    </Switch>
  );
};
