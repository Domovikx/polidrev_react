import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  center: {
    textAlign: 'center',
  },
  img: {
    maxHeight: '100px',
    maxWidth: '200px',
  },
  media: {
    backgroundSize: 'contain',
    height: 0,
    paddingTop: '56.25%',
  },
  paragraph: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
  root: {
    maxWidth: 345,
  },
  title: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
}));
