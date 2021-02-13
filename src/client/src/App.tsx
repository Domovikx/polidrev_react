import * as React from 'react';
import firebase from 'firebase/app';
import { CssBaseline } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'jotai';

import ErrorBoundary from './components/common/ErrorBoundary';
import Notifier from './components/common/Notifier';
import { firebaseConfig } from './config/firebaseConfig';
import { greenTheme } from './themes/green.theme';
import { Routing } from './Routing';

import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(firebaseConfig);

export const App = (): JSX.Element => (
  <ErrorBoundary>
    <CssBaseline />
    <ThemeProvider theme={greenTheme}>
      <Provider>
        <SnackbarProvider
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          maxSnack={3}
          autoHideDuration={10000}
        >
          <Notifier />
          <Routing />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  </ErrorBoundary>
);
