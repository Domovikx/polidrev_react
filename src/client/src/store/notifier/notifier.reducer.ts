import { NOTIFIER, NotifierAction, NotifierState } from './notifier.types';

export const notifierState: NotifierState = {
  notifications: [],
};

export const notifierReducer = (
  state = notifierState,
  { type, payload }: NotifierAction,
): NotifierState => {
  switch (type) {
    case NOTIFIER.ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            key: payload.key,
            ...payload.notification,
          },
        ],
      };

    case NOTIFIER.CLOSE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.map((notification: any) =>
          payload.dismissAll || payload.key === notification.key
            ? { ...notification, dismissed: true }
            : { ...notification },
        ),
      };

    case NOTIFIER.REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification: any) => payload.key !== notification.key,
        ),
      };

    default:
      return state;
  }
};
