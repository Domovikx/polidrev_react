import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  errorIcon: {
    backgroundColor: theme.palette.error.main,
    margin: theme.spacing(1),
  },
  form: {
    // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    width: '100%',
  },
  link: {
    textTransform: 'initial',
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  successIcon: {
    backgroundColor: theme.palette.success.light,
    margin: theme.spacing(1),
  },
  typography: {
    marginBottom: theme.spacing(3),
  },
}));
