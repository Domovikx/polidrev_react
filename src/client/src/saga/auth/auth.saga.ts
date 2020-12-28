import firebase from 'firebase/app';
import { call, takeEvery } from 'redux-saga/effects';

import notificationCreator from '../../components/common/notificationCreator';
import { AUTH, AuthRegisterArgs } from '../../store/auth/auth.types';
import { Worker } from '../saga.types';

import { AuthLogoutWorker, AuthWatcher } from './auth.types';

function* authCreateUser(email: string, password: string) {
  try {
    const response = yield firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    yield notificationCreator(
      `${response.user.email} успешно зарегистрирован`,
      'success',
    );

    return response;
  } catch (error) {
    yield notificationCreator(error.message, 'warning');
    return null;
  }
}
const authLogout = () => firebase.auth().signOut();

export function* authRegisterWorker({
  payload: { email, password },
}: AuthRegisterArgs): Generator {
  const response = yield call(() => authCreateUser(email, password));
  // TODO - если регистрация успешна, тут продолжаю логику
  // добавить данные в стор, перейти на страницу admin
  console.log('response :>> ', response);
}

export function* authLoginWorker(): Worker {
  // TODO
}

export function* authLogoutWorker(): AuthLogoutWorker {
  // TODO
  yield call(authLogout);
}

export function* authWatcher(): AuthWatcher {
  yield takeEvery(AUTH.REGISTER, authRegisterWorker);
}
