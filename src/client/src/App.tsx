import * as React from 'react';
import createSagaMiddleware from 'redux-saga';
import firebase from 'firebase/app';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core/styles';

import ErrorBoundary from './components/common/ErrorBoundary';
import Notifier from './components/common/Notifier';
import { firebaseConfig } from './config/firebaseConfig';
import { greenTheme } from './themes/green.theme';
import { rootReducer } from './store/root.reducer';
import { rootWatcher } from './saga/root.watcher';
import { Routing } from './Routing';

import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(firebaseConfig);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootWatcher);

export const App = (): JSX.Element => (
  <ErrorBoundary>
    <CssBaseline />
    <ThemeProvider theme={greenTheme}>
      <Provider store={store}>
        <SnackbarProvider
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          maxSnack={3}
        >
          <Notifier />
          <Routing />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  </ErrorBoundary>
);
