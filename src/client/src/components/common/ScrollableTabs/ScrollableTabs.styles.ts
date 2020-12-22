import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values['lg'],
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100vw',
    },
  },
}));
