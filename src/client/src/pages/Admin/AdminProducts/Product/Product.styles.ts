import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  blockBtn: {
    textAlign: 'right',
  },
  container: {
    '& .MuiFormControl-root.MuiTextField-root': {
      margin: `${theme.spacing(2)}px 0`,
    },
    margin: theme.spacing(2),
  },
  img: {
    maxWidth: '250px',
  },
  paper: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
}));
