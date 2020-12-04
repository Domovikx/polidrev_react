/**
 * For develop
 * https://console.firebase.google.com/project/polidrev-react/authentication/users
 */

import firebase from 'firebase/app';

import { ActionType } from '../actionTypes';
import { RegisterData } from './authTypes';

export const authRegister = ({ email, password }: RegisterData) => {
  try {
    firebase.auth().createUserWithEmailAndPassword(email, password);
    // TODO: create a notification
  } catch (error) {
    // TODO: create a notification
    throw Error;
  }

  return {
    type: ActionType.AUTH_REGISTER,
    payload: 'temp message createUserWithEmailAndPassword',
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
    type: ActionType.AUTH_LOGIN,
    payload: 'temp message signInWithEmailAndPassword',
  };
};

export const authLogout = () => {
  firebase.auth().signOut();
  return { type: ActionType.AUTH_LOGOUT, payload: 'temp message signOut' };
};
