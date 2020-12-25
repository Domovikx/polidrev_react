export interface NotifierState {
  notifications: any; // TODO
}

export enum NOTIFIER {
  ENQUEUE_SNACKBAR = 'NOTIFIER.ENQUEUE_SNACKBAR',
  CLOSE_SNACKBAR = 'NOTIFIER.CLOSE_SNACKBAR',
  REMOVE_SNACKBAR = 'NOTIFIER.REMOVE_SNACKBAR',
}

export type NotifierAction =
  | { type: NOTIFIER.ENQUEUE_SNACKBAR; payload: any }
  | { type: NOTIFIER.CLOSE_SNACKBAR; payload: any }
  | { type: NOTIFIER.REMOVE_SNACKBAR; payload: any };
