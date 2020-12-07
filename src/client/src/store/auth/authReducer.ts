import { Action, ActionType } from '../actionTypes';

export const authInitialState = {
  test: 'test',
  token: null,
};

export const authReducer = (
  state = authInitialState,
  { type, payload }: Action,
) => {
  switch (type) {
    case ActionType.AUTH_REGISTER:
      console.log(ActionType.AUTH_REGISTER, payload);
      break;

    case ActionType.AUTH_LOGIN:
      console.log(ActionType.AUTH_LOGIN, payload);
      break;

    case ActionType.AUTH_LOGOUT:
      console.log(ActionType.AUTH_LOGOUT, payload);
      break;

    default:
      return state;
  }
};
