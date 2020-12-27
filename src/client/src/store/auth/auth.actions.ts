import firebase from 'firebase/app';
import { Dispatch } from 'redux';

import notificationCreator from '../../components/common/notificationCreator';

import { AUTH, AuthAction, AuthRegisterValues } from './auth.types';

/**
 * For develop
 * https://console.firebase.google.com/project/polidrev-react/authentication/users
 */

export const authRegisterAction = async (
  dispatch: Dispatch,
  { email, password }: AuthRegisterValues,
): Promise<{ payload: string; type: AUTH }> => {
  try {
    // TODO: any
    const response: any = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    notificationCreator({
      dispatch,
      message: `${response.user.email} успешно зарегистрирован`,
      variant: 'success',
    });
  } catch (error) {
    notificationCreator({
      dispatch,
      message: error.message,
      variant: 'error',
    });
    throw Error;
  }

  return {
    payload: 'temp message createUserWithEmailAndPassword',
    type: AUTH.REGISTER,
  };
};

export const authLoginAction = ({
  email,
  password,
}: AuthRegisterValues): AuthAction => {
  try {
    firebase.auth().signInWithEmailAndPassword(email, password);
    // TODO: create a notification
  } catch (error) {
    // TODO: create a notification
    throw Error;
  }

  return {
    payload: 'temp message signInWithEmailAndPassword',
    type: AUTH.LOGIN,
  };
};

export const authLogoutAction = (): AuthAction => {
  firebase.auth().signOut();
  return { payload: 'temp message signOut', type: AUTH.LOGOUT };
};
