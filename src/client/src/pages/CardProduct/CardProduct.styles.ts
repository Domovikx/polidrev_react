import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
  },
  content: {
    alignSelf: 'start',
  },
  grid: {
    display: 'grid',
    gap: theme.spacing(2),
    margin: `${theme.spacing(2)}px 0`,
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
    },
  },
  icon: {
    height: '30px',
    width: '30px',
  },
  iconButton: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    position: 'absolute',
    right: 0,
    zIndex: 100,
  },
}));
