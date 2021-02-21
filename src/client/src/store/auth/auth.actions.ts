import { Dispatch } from 'redux';

import { logoutService } from '../../services/logout.service';
import { signInService } from '../../services/signIn.service';
import { createNotifierAction } from '../notifier/notifier.actions';

import { AUTH, AuthAction, AuthLoginPayload } from './auth.types';

export function authLoginThunk(payload: AuthLoginPayload) {
  return async function (dispatch: Dispatch): Promise<void> {
    const { email, password } = payload;

    try {
      await dispatch(authLogoutAction());

      const signIn = await signInService({ email, password });

      if (signIn === true) {
        await dispatch(authLoginAction());
        await dispatch(
          createNotifierAction('Вы успешно вошли в систему', 'info'),
        );
      }

      if (signIn instanceof Error) {
        dispatch(
          createNotifierAction(
            `Ошибка, неверный логин или пароль. ${signIn.message}`,
            'warning',
          ),
        );
      }
    } catch (error) {
      dispatch(createNotifierAction(error.message, 'warning'));
    }
  };
}

export function authLogoutThunk() {
  return async function (dispatch: Dispatch): Promise<void> {
    try {
      await logoutService();
      await dispatch(authLogoutAction());
      await dispatch(createNotifierAction('Вы вышли из системы', 'info'));
    } catch (error) {
      dispatch(createNotifierAction(error.message, 'warning'));
    }
  };
}

export const authLogoutAction = (): AuthAction => ({
  payload: false,
  type: AUTH.LOGOUT,
});

export const authLoginAction = (): AuthAction => ({
  payload: true,
  type: AUTH.LOGIN,
});
