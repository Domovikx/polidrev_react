import * as React from 'react';
import firebase from 'firebase/app';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { firebaseConfig } from './config/firebaseConfig';
import { Provider } from 'react-redux';
import { rootReducer } from './store/root.reducer';
import { Routing } from './Routing';
import 'firebase/auth';
import 'firebase/database';

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
