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
  | { type: AUTH.REGISTER; payload: string }
  | { type: AUTH.LOGIN; payload: string }
  | { type: AUTH.LOGOUT; payload: string };
