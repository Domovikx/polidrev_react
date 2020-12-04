import * as React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Routing } from './Routing';
import { rootReducer } from './store/rootReducer';

import { firebaseConfig } from './config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

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
