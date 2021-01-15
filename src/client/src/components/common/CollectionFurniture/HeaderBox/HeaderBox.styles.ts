import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  center: {
    textAlign: 'center',
  },
  grid: {
    columnGap: theme.spacing(3),
    display: 'grid',
    gridTemplate: `repeat(auto-fit, minmax(100px, auto)) / repeat(
          auto-fit,
          minmax(300px, auto)
        )`,
  },
  img: {
    maxHeight: '100px',
    maxWidth: '200px',
  },
  paragraph: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
  title: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
}));
