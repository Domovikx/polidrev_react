import { ActionType } from '../actionTypes';
import { RegisterData } from './authTypes';

import axios from 'axios';

// TODO: Keys are temporarily here
const apiKey = 'AIzaSyDcCLzE9x3JjTPT49kRCPfcUsRCuIL0SGA';
const urlSignIn = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDcCLzE9x3JjTPT49kRCPfcUsRCuIL0SGA`;

export const authRegister = ({ email, password }: RegisterData) => {
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };

  console.log('authData :>> ', authData);

  let response;

  try {
    response = axios.post(urlSignIn, authData);
    console.log('response :>> ', response);
  } catch (error) {
    throw error;
  }

  return { type: ActionType.AUTH_REGISTER, payload: response };
};

export const authLogin = (registerData: RegisterData) => {
  // const authData = {
  //   email,
  //   password,
  //   returnSecureToken: true,
  // };

  // try {
  //   const response = await axios.post(urlSignIn, authData);
  //   console.log('response :>> ', response);
  // } catch (error) {
  //   throw error;
  // }

  return { type: ActionType.AUTH_LOGIN, payload: registerData };
};

export const authLogout = (registerData: RegisterData) => {
  return { type: ActionType.AUTH_LOGOUT, payload: registerData };
};

const registerHendler = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDcCLzE9x3JjTPT49kRCPfcUsRCuIL0SGA',
    authDomain: 'polidrev-react.firebaseapp.com',
    databaseURL: 'https://polidrev-react.firebaseio.com',
    projectId: 'polidrev-react',
    storageBucket: 'polidrev-react.appspot.com',
    messagingSenderId: '218117830377',
    appId: '1:218117830377:web:f835b0f62f786be2826278',
    measurementId: 'G-MKT5TS1MXB',
  };
};

const authSuccess = (token: string) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDcCLzE9x3JjTPT49kRCPfcUsRCuIL0SGA',
    authDomain: 'polidrev-react.firebaseapp.com',
    databaseURL: 'https://polidrev-react.firebaseio.com',
    projectId: 'polidrev-react',
    storageBucket: 'polidrev-react.appspot.com',
    messagingSenderId: '218117830377',
    appId: '1:218117830377:web:f835b0f62f786be2826278',
    measurementId: 'G-MKT5TS1MXB',
  };
};
