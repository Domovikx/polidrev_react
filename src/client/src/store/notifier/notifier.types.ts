export interface NotifierState {
  notifications: any; // TODO
}

export enum NOTIFIER {
  ENQUEUE_SNACKBAR = 'NOTIFIER.ENQUEUE_SNACKBAR',
  CLOSE_SNACKBAR = 'NOTIFIER.CLOSE_SNACKBAR',
  REMOVE_SNACKBAR = 'NOTIFIER.REMOVE_SNACKBAR',
}

// TODO : any
// divide into separate action
export type NotifierAction =
  | {
      type: NOTIFIER.ENQUEUE_SNACKBAR;
      payload: any;
    }
  | { type: NOTIFIER.CLOSE_SNACKBAR; payload: any }
  | {
      type: NOTIFIER.REMOVE_SNACKBAR;
      payload: any;
    };

export interface CloseSnackbarPayload {
  dismissAll: boolean;
  key: string | null;
}

export interface EnqueueSnackbarPayload {
  notification: {
    key: string;
    message: string;
    options: {
      action(key: string | null): JSX.Element;
      key?: string | undefined;
      variant?: string | undefined;
      autoHideDuration?: string | number | undefined;
    };
  };
}

export interface RemoveSnackbarPayload {
  key: number | string | null;
}
