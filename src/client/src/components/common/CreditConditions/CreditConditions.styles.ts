import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  img: {
    borderRadius: '16px',
    boxShadow: theme.shadows[3],
    margin: `0 0 ${theme.spacing(1)}px`,
    maxHeight: '175px',
    maxWidth: '280px',
  },
  list: {
    display: 'grid',
    gap: theme.spacing(3),
    gridColumn: 1,
    gridRow: 2,
  },
  listItem: {
    columnGap: theme.spacing(3),
    display: 'grid',
    gridTemplate: `repeat(auto-fit, minmax(100px, auto)) / repeat(
          auto-fit,
          minmax(300px, auto)
        )`,
  },
  paragraph: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
  text: {
    margin: 0,
    padding: 0,
  },
  title: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
}));
