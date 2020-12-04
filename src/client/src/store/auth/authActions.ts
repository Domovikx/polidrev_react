/**
 * For develop
 * https://console.firebase.google.com/project/polidrev-react/authentication/users
 */

import { ActionType } from '../actionTypes';
import { RegisterData } from './authTypes';

import firebase from 'firebase/app';

export const authRegister = ({ email, password }: RegisterData) => {
  try {
    firebase.auth().createUserWithEmailAndPassword(email, password);
    // TODO: create a notification
  } catch (error) {
    // TODO: create a notification
    throw Error;
  }

  return { type: ActionType.AUTH_REGISTER, payload: 'response' };
};

export const authLogin = (registerData: RegisterData) => {
  return { type: ActionType.AUTH_LOGIN, payload: registerData };
};

export const authLogout = (registerData: RegisterData) => {
  return { type: ActionType.AUTH_LOGOUT, payload: registerData };
};

const registerHendler = () => {
  console.log('registerHendler :>> ');
};

const authSuccess = (token: string) => {
  console.log('authSuccess :>> ');
};
