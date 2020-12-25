import { useSnackbar } from 'notistack';
import React from 'react';

export const Notifier = () => {
  // TODO - temp console.log
  console.log('Notifier :>> ');
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return <>123</>;
};
