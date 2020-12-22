import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  MenuIcon: {
    color: theme.palette.primary.contrastText,
  },
  fullList: {
    width: 'auto',
  },
  list: {
    width: 250,
  },
}));
