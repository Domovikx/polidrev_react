import { Action, ActionType } from '../actionTypes';

export const authInitialState = {
  test: 'test',
  token: null,
};

export const authReducer = (state = authInitialState, action: Action) => {
  switch (action.type) {
    case ActionType.AUTH_REGISTER:
      console.log(ActionType.AUTH_REGISTER, action.payload);
      break;

    case ActionType.AUTH_LOGIN:
      console.log(ActionType.AUTH_LOGIN, action.payload);
      break;

    case ActionType.AUTH_LOGOUT:
      console.log(ActionType.AUTH_LOGOUT, action.payload);
      break;

    default:
      return state;
  }
};
