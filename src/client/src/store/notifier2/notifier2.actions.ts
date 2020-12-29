import {
  Message,
  Notifier2Action,
  NOTIFIER_2,
  Variant,
} from './notifier2.types';

export const createNotifier2Action = (
  message: Message,
  variant: Variant,
): Notifier2Action => ({
  payload: { message, variant },
  type: NOTIFIER_2.CREATE,
});
