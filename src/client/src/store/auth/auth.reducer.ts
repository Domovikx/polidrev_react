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
    case AUTH.REGISTER: // TODO
      return state;

    case AUTH.LOGIN: // TODO
      return state;

    case AUTH.LOGOUT: // TODO
      return state;

    default:
      return state;
  }
};
