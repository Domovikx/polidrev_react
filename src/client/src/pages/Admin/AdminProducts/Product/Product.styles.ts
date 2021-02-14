import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  blockBtn: {
    textAlign: 'right',
  },
  container: { margin: theme.spacing(2) },
  img: {
    maxWidth: '250px',
  },
  paper: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
}));
