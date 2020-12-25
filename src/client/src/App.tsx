import * as React from 'react';
import firebase from 'firebase/app';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core/styles';

import { firebaseConfig } from './config/firebaseConfig';
import { greenTheme } from './themes/green.theme';
import { rootReducer } from './store/root.reducer';
import { Routing } from './Routing';
import ErrorBoundary from './components/common/ErrorBoundary';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(firebaseConfig);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(), // TODO: this moment for Middleware
  ),
);

export const App = (): JSX.Element => (
  <ErrorBoundary>
    <CssBaseline />
    <ThemeProvider theme={greenTheme}>
      <Provider store={store}>
        <SnackbarProvider>
          <Routing />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  </ErrorBoundary>
);
