import firebase from 'firebase/app';
import { Dispatch } from 'redux';

import {
  AUTH,
  AuthAction,
  AuthRegisterAction,
  AuthRegisterValues,
} from './auth.types';

/**
 * For develop
 * https://console.firebase.google.com/project/polidrev-react/authentication/users
 */

export const authRegisterAction: AuthRegisterAction = (
  // TODO: question about a dispatch, maybe this is a temporary solution
  dispatch: Dispatch,
  { email, password }: AuthRegisterValues,
) => ({
  payload: {
    dispatch,
    email,
    password,
  },
  type: AUTH.REGISTER,
});

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
