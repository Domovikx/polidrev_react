import firebase from 'firebase/app';
import { call, put, takeEvery } from 'redux-saga/effects';

import notificationCreator from '../../components/common/notificationCreator';
import { AUTH } from '../../store/auth/auth.types';
import { Worker } from '../saga.types';

import { AuthLogoutWorker, AuthWatcher } from './auth.types';

const authCreateUser = async (
  email: string,
  password: string,
  dispatch: any,
) => {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    notificationCreator({
      dispatch,
      message: `${response.user?.email} успешно зарегистрирован`,
      variant: 'success',
    });

    return response;
  } catch (error: any) {
    notificationCreator({
      dispatch,
      message: error.message,
      variant: 'warning',
    });
  }
};
const authLogout = () => firebase.auth().signOut();

export function* authRegisterWorker(action: any): any {
  const { payload } = action;
  const response = yield call(() =>
    authCreateUser(payload.email, payload.password, payload.dispatch),
  );
  console.log('response 2 :>> ', response);
}

export function* authLoginWorker(): Worker {
  // TODO
}

export function* authLogoutWorker(): AuthLogoutWorker {
  yield call(authLogout);
}

// WATCHERS //

export function* authWatcher(): AuthWatcher {
  yield takeEvery(AUTH.REGISTER, authRegisterWorker);
}
