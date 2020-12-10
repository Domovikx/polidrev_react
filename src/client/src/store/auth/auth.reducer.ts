import { Action } from '../action.types';
import { AUTH } from './auth.types';

export const authInitialState = {
  test: 'test',
  token: null,
};

export const authReducer = (
  state = authInitialState,
  { type, payload }: Action,
) => {
  switch (type) {
    case AUTH.REGISTER:
      console.log(AUTH.REGISTER, payload);
      break;

    case AUTH.LOGIN:
      console.log(AUTH.LOGIN, payload);
      break;

    case AUTH.LOGOUT:
      console.log(AUTH.LOGOUT, payload);
      break;

    default:
      return state;
  }
};
