export type Message = string | null;
export type Variant =
  | 'warning'
  | 'success'
  | 'default'
  | 'error'
  | 'info'
  | undefined;

export interface Notifier2State {
  variant: Variant;
  message: Message;
}

export enum NOTIFIER_2 {
  CREATE = 'NOTIFIER_2.CREATE',
}

export type Notifier2Action = {
  type: NOTIFIER_2.CREATE;
  payload: {
    variant: Variant;
    message: Message;
  };
};
