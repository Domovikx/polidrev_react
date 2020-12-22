import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  active: {
    color: theme.palette.grey[50],
  },

  btn: {
    alignSelf: 'stretch',
    color: theme.palette.primary.contrastText,
    textTransform: 'inherit',
  },

  palette: {
    type: 'dark',
  },
}));
