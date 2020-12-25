import { AUTH, AuthAction, AuthState } from './auth.types';

export const authState: AuthState = {
  test: 'test',
  token: null,
};

export const authReducer = (
  state: AuthState = authState,
  { type, payload }: AuthAction,
): AuthState => {
  switch (type) {
    case AUTH.REGISTER:
      // TODO - temp console.log
      console.log(AUTH.REGISTER, payload);
      return state;

    case AUTH.LOGIN:
      // TODO - temp console.log
      console.log(AUTH.LOGIN, payload);
      return state;

    case AUTH.LOGOUT:
      // TODO - temp console.log
      console.log(AUTH.LOGOUT, payload);
      return state;

    default:
      return state;
  }
};
