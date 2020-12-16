import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textTransform: 'initial',
  },
  successIcon: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.light,
  },
  errorIcon: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.error.main,
  },
  typography: {
    marginBottom: theme.spacing(3),
  },
}));
