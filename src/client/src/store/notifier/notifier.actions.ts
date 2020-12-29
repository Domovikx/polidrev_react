import { uid } from 'uid';

import { EnqueueSnackbarArgs } from '../../components/common/notificationCreator/notificationCreator.types';

import { NOTIFIER, NotifierAction } from './notifier.types';

export const enqueueSnackbarAction = (
  notification: EnqueueSnackbarArgs,
): NotifierAction => {
  const key = notification.options && notification.options.key;

  return {
    payload: {
      notification: {
        ...notification,
        key: key || uid(),
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

export const removeSnackbarAction = (key: string | number): NotifierAction => ({
  payload: { key },
  type: NOTIFIER.REMOVE_SNACKBAR,
});
