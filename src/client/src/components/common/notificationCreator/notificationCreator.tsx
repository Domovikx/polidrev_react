import React from 'react';
import { IconButton } from '@material-ui/core';
import { uid } from 'uid';

import { CloseIcon } from '../../../assets/Icons';
import {
  closeSnackbarAction,
  enqueueSnackbarAction,
} from '../../../store/notifier/notifier.actions';

import { CommonNotificationArgs, Key } from './notificationCreator.types';

export const notificationCreator = ({
  message = 'message',
  variant = 'warning',
  // TODO - problems with dispatch
  dispatch,
}: CommonNotificationArgs): void => {
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
