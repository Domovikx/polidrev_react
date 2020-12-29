import { Notifier2Action, Notifier2State, NOTIFIER_2 } from './notifier2.types';

export const notifier2State: Notifier2State = {
  message: '',
  variant: 'default',
};

export const notifier2Reducer = (
  state = notifier2State,
  { type, payload }: Notifier2Action,
): Notifier2State => {
  switch (type) {
    case NOTIFIER_2.CREATE:
      return {
        message: payload.message,
        variant: payload.variant,
      };
    default:
      return state;
  }
};
