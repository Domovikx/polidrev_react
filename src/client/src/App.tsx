import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Routing } from './Routing';
import { rootReducer } from './store/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(), // TODO: this moment for Middleware
  ),
);

export const App = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
);
