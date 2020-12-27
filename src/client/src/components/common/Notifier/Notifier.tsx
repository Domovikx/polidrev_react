import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';

import { RootState } from '../../../store/root.reducer';
import { removeSnackbarAction } from '../../../store/notifier/notifier.actions';

/**
 * Documentation
 * https://iamhosseindhv.com/notistack/demos#redux-/-mobx-example
 */

let displayed: any = [];

export const Notifier = (): null => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const notifications: any = useSelector(
    (store: RootState) => store.notifier.notifications,
  );

  const storeDisplayed = (id: any) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: any) => {
    displayed = [...displayed.filter((key: any) => id !== key)];
  };

  useEffect(() => {
    notifications.forEach(
      ({ key, message, options = {}, dismissed = false }: any) => {
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
