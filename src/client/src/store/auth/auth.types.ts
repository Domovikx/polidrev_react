import { AnyAction, Dispatch } from 'redux';

export interface AuthRegisterPayload {
  dispatch: Dispatch<AnyAction>;
  email: string;
  password: string;
}
export interface AuthRegisterValues {
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface AuthState {
  test?: string;
  token?: null | string;
}

export enum AUTH {
  REGISTER = 'AUTH.REGISTER',
  LOGIN = 'AUTH.LOGIN',
  LOGOUT = 'AUTH.LOGOUT',
}

export type AuthAction =
  | { type: AUTH.REGISTER; payload: AuthRegisterPayload }
  | { type: AUTH.LOGIN; payload: string }
  | { type: AUTH.LOGOUT; payload: string };

// TODO : temp type
export type AuthRegisterAction = (
  dispatch: Dispatch,
  { email, password }: AuthRegisterValues,
) => {
  payload: AuthRegisterPayload;
  type: AUTH;
};
