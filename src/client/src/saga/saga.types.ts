import { AllEffect } from 'redux-saga/effects';

import { AuthWatcher } from './auth/auth.types';

export type Watcher = Generator<never, void, unknown>;
export type Worker = Generator<never, void, unknown>;
export type RootWatcher = Generator<AllEffect<AuthWatcher>, void, unknown>;
