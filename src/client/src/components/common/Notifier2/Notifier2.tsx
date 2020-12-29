import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import { RootState } from '../../../store/store.types';
import { Notifier2State } from '../../../store/notifier2/notifier2.types';

export const Notifier2 = (): null => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const notification: Notifier2State = useSelector(
    (store: RootState) => store.notifier2,
  );
  const { message, variant } = notification;
  if (!message) return null;

  const key = enqueueSnackbar(message, {
    onClick: () => {
      closeSnackbar(key);
    },
    variant,
  });

  return null;
};
