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
      // TODO - temp console.log
      console.log('NOTIFIER.ENQUEUE_SNACKBAR 333:>> ', payload, state);

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
      // TODO - temp console.log
      console.log('NOTIFIER.CLOSE_SNACKBAR :>> ', payload);
      // return {
      //   ...state,
      //   notifications: state.notifications.map((notification) =>
      //     action.dismissAll || notification.key === action.key
      //       ? { ...notification, dismissed: true }
      //       : { ...notification },
      //   ),
      // };
      return state;

    case NOTIFIER.REMOVE_SNACKBAR:
      // TODO - temp console.log
      console.log('NOTIFIER.REMOVE_SNACKBAR :>> ', payload);
      // return {
      //   ...state,
      //   notifications: state.notifications.filter(
      //     (notification) => notification.key !== action.key,
      //   ),
      // };
      return state;

    default:
      return state;
  }
};
