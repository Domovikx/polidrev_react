export interface AuthState {
  test?: string;
  token?: null | string;
}

export enum AUTH {
  REGISTER = 'AUTH.REGISTER',
  LOGIN = 'AUTH.LOGIN',
  LOGOUT = 'AUTH.LOGOUT',
}

export interface AuthRegisterPayload {
  email: string;
  password: string;
}

export interface AuthRegisterArgs {
  payload: AuthRegisterPayload;
  type: AUTH;
}

export type AuthAction =
  | { type: AUTH.REGISTER; payload: AuthRegisterPayload }
  | { type: AUTH.LOGIN; payload: string }
  | { type: AUTH.LOGOUT; payload: string };

export interface AuthRegisterValues {
  email: string;
  password: string;
  passwordConfirm?: string;
}
