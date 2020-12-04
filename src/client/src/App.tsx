import * as React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Routing } from './Routing';
import { rootReducer } from './store/rootReducer';

// TODO: Move to another place
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: 'AIzaSyDcCLzE9x3JjTPT49kRCPfcUsRCuIL0SGA',
  authDomain: 'polidrev-react.firebaseapp.com',
  databaseURL: 'https://polidrev-react.firebaseio.com',
  projectId: 'polidrev-react',
  storageBucket: 'polidrev-react.appspot.com',
  messagingSenderId: '218117830377',
  appId: '1:218117830377:web:f835b0f62f786be2826278',
  measurementId: 'G-MKT5TS1MXB',
};
firebase.initializeApp(config);
//

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
