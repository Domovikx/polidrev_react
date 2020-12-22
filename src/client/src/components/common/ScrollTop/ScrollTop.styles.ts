import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    bottom: theme.spacing(2),
    position: 'fixed',
    right: theme.spacing(2),
  },
}));
