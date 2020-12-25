import { NotificationValues } from '../../pages/Authentication/Authentication';

import { NOTIFIER, NotifierAction } from './notifier.types';

export const enqueueSnackbarAction = (
  notification: NotificationValues,
): NotifierAction => {
  const key = notification.options && notification.options.key;

  return {
    payload: {
      notification: {
        ...notification,
        key,
      },
    },
    type: NOTIFIER.ENQUEUE_SNACKBAR,
  };
};

export const closeSnackbarAction = (key: string | null): NotifierAction => ({
  payload: {
    dismissAll: !key,
    key,
  },
  type: NOTIFIER.CLOSE_SNACKBAR,
});

export const removeSnackbarAction = (key: string): NotifierAction => ({
  payload: { key },
  type: NOTIFIER.REMOVE_SNACKBAR,
});
