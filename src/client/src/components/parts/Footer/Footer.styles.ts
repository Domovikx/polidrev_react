import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
  },
}));
