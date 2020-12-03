import { ActionType } from '../actionTypes';
import { RegisterData } from './authTypes';

export const authRegister = (registerData: RegisterData) => {
  return { type: ActionType.AUTH_REGISTER, payload: registerData };
};

export const authLogin = (registerData: RegisterData) => {
  return { type: ActionType.AUTH_LOGIN, payload: registerData };
};

export const authLogout = (registerData: RegisterData) => {
  return { type: ActionType.AUTH_LOGOUT, payload: registerData };
};
