export interface RegisterData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export enum AUTH {
  REGISTER = 'AUTH.REGISTER',
  LOGIN = 'AUTH.LOGIN',
  LOGOUT = 'AUTH.LOGOUT',
}
