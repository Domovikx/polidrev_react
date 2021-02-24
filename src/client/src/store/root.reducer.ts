import { combineReducers } from 'redux';

import { authReducer } from './auth/auth.reducer';
import { furnitureCollectionsReducer } from './furnitureCollections/furnitureCollections.reducer';
import { notifierReducer } from './notifier/notifier.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  furnitureCollections: furnitureCollectionsReducer,
  notifier: notifierReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
