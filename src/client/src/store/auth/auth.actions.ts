/**
 * For develop
 * https://console.firebase.google.com/project/polidrev-react/authentication/users
 */

import firebase from 'firebase/app';

import { AUTH, AuthAction, AuthRegisterValues } from './auth.types';

export const authRegisterAction = ({
  email,
  password,
}: AuthRegisterValues): AuthAction => {
  try {
    firebase.auth().createUserWithEmailAndPassword(email, password);
    // TODO: create a notification
  } catch (error) {
    // TODO: create a notification
    throw Error;
  }

  return {
    payload: 'temp message createUserWithEmailAndPassword',
    type: AUTH.REGISTER,
  };
};

export const authLoginAction = ({
  email,
  password,
}: AuthRegisterValues): AuthAction => {
  try {
    firebase.auth().signInWithEmailAndPassword(email, password);
    // TODO: create a notification
  } catch (error) {
    // TODO: create a notification
    throw Error;
  }

  return {
    payload: 'temp message signInWithEmailAndPassword',
    type: AUTH.LOGIN,
  };
};

export const authLogoutAction = (): AuthAction => {
  firebase.auth().signOut();
  return { payload: 'temp message signOut', type: AUTH.LOGOUT };
};
