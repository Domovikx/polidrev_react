export interface RegisterData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export enum AUTH {
  REGISTER = 'AUTH_REGISTER',
  LOGIN = 'AUTH_LOGIN',
  LOGOUT = 'AUTH_LOGOUT',
}
