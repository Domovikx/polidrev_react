import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  palette: {
    type: 'dark',
  },

  btn: {
    alignSelf: 'stretch',
    textTransform: 'inherit',
    color: theme.palette.primary.contrastText,
  },

  active: {
    color: theme.palette.grey[50],
  },
}));
