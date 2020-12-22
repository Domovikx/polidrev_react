import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  btn: {
    alignSelf: 'stretch',
    color: theme.palette.primary.contrastText,
    textTransform: 'inherit',
  },
  container: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
}));
