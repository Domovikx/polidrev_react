export type Key = string | null;

export interface EnqueueSnackbarArgs {
  message: string;
  options: {
    action(key: Key): JSX.Element;
    key?: string;
    variant?: string;
    autoHideDuration?: string | number;
  };
}
