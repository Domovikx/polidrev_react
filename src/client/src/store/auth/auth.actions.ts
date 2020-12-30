import firebase from 'firebase/app';

import { AUTH, AuthAction, AuthRegisterValues } from './auth.types';

/**
 * For develop
 * https://console.firebase.google.com/project/polidrev-react/authentication/users
 */

export const authRegisterAction = ({
  email,
  password,
}: AuthRegisterValues): AuthAction => ({
  payload: {
    email,
    password,
  },
  type: AUTH.REGISTER,
});

// TODO: Remake using sagas
export const authLoginAction = ({
  email,
  password,
}: AuthRegisterValues): AuthAction => {
  try {
    firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw Error;
  }

  return {
    payload: 'temp message signInWithEmailAndPassword',
    type: AUTH.LOGIN,
  };
};

// TODO: Remake using sagas
export const authLogoutAction = (): AuthAction => {
  firebase.auth().signOut();
  return { payload: 'temp message signOut', type: AUTH.LOGOUT };
};
