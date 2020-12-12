import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  list: {
    width: 250,
  },
  MenuIcon: {
    color: theme.palette.primary.contrastText,
  },
  fullList: {
    width: 'auto',
  },
}));
