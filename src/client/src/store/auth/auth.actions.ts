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
    type: AUTH.REGISTER,
    payload: 'temp message createUserWithEmailAndPassword',
  };
};

export const authLogin = ({ email, password }: RegisterData) => {
  try {
    console.log('signInWithEmailAndPassword :>> ');
    firebase.auth().signInWithEmailAndPassword(email, password);
    // TODO: create a notification
  } catch (error) {
    // TODO: create a notification
    throw Error;
  }

  return {
    type: AUTH.LOGIN,
    payload: 'temp message signInWithEmailAndPassword',
  };
};

export const authLogout = () => {
  firebase.auth().signOut();
  return { type: AUTH.LOGOUT, payload: 'temp message signOut' };
};
