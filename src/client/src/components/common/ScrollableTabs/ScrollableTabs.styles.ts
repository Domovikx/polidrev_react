import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  flexContainer: {
    justifyContent: 'space-between',
    width: '100%',
  },
  wrapper: {
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100vw',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values['lg'],
    },
  },
}));
