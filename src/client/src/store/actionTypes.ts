export interface Action {
  type: string;
  payload: {} | string | number | boolean;
}

export enum ActionType {
  AUTH_REGISTER = 'AUTH_REGISTER',
  AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
}
