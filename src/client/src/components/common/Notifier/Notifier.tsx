import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';

import { RootState } from '../../../store/store.types';
import { removeSnackbarAction } from '../../../store/notifier/notifier.actions';

import { NotificationType } from './Notifier.types';

/**
 * Documentation
 * https://iamhosseindhv.com/notistack/demos#redux-/-mobx-example
 */

let displayed: string[] = [];

export const Notifier = (): null => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const notifications: NotificationType[] = useSelector(
    (store: RootState) => store.notifier.notifications,
  );

  const storeDisplayed = (id: string) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: string | number) => {
    displayed = [...displayed.filter((key: string) => id !== key)];
  };

  useEffect(() => {
    notifications.forEach(
      ({ key, message, options, dismissed = false }: NotificationType) => {
        if (dismissed) {
          closeSnackbar(key);
          return;
        }

        if (displayed.includes(key)) return;

        enqueueSnackbar(message, {
          key,
          ...options,

          onClose: (event, reason, key) => {
            if (options.onClose) {
              options.onClose(event, reason, key);
            }
          },

          onExited: (event, key) => {
            dispatch(removeSnackbarAction(key));
            removeDisplayed(key);
          },
        });

        storeDisplayed(key);
      },
    );
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  return null;
};
