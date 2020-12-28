import React from 'react';
import { IconButton } from '@material-ui/core';
import { uid } from 'uid';

import { store } from '../../../App';
import { CloseIcon } from '../../../assets/Icons';
import {
  closeSnackbarAction,
  enqueueSnackbarAction,
} from '../../../store/notifier/notifier.actions';

import { Key } from './notificationCreator.types';

// TODO: maybe it's a utility
export const notificationCreator = (
  message = 'message',
  variant = 'warning',
): void => {
  // TODO: Ask about this moment.
  const dispatch = store.dispatch;

  dispatch(
    enqueueSnackbarAction({
      message,
      options: {
        action: (key: Key) => (
          <IconButton onClick={() => dispatch(closeSnackbarAction(key))}>
            <CloseIcon />
          </IconButton>
        ),
        autoHideDuration: 6000,
        key: uid(),
        variant,
      },
    }),
  );
};
