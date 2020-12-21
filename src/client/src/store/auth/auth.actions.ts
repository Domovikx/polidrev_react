/**
 * For develop
 * https://console.firebase.google.com/project/polidrev-react/authentication/users
 */

import firebase from 'firebase/app';

import { AUTH, RegisterData } from './auth.types';

export const authRegister = ({ email, password }: RegisterData) => {
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

export const authLogin = ({ email, password }: RegisterData) => {
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

export const authLogout = () => {
  firebase.auth().signOut();
  return { payload: 'temp message signOut', type: AUTH.LOGOUT };
};
