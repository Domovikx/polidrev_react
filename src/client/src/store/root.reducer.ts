import { combineReducers } from 'redux';

import { authReducer } from './auth/auth.reducer';
import { notifierReducer } from './notifier/notifier.reducer';
import { notifier2Reducer } from './notifier2/notifier2.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  notifier: notifierReducer,
  notifier2: notifier2Reducer,
});
