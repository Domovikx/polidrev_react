import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    textAlign: 'center',
  },
  btn: {
    alignSelf: 'stretch',
    textTransform: 'inherit',
    color: theme.palette.primary.contrastText,
  },
}));
