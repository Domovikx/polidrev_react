import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  list: {
    display: 'grid',
    gridColumn: 1,
    gridRow: 2,
    gap: theme.spacing(3),
  },
  listItem: {
    display: 'grid',
    gridTemplate: `repeat(auto-fit, minmax(100px, auto)) / repeat(
          auto-fit,
          minmax(300px, auto)
        )`,
    columnGap: theme.spacing(3),
  },
  img: {
    maxWidth: '280px',
    maxHeight: '175px',
    borderRadius: '16px',
    boxShadow: theme.shadows[3],
    margin: `0 0 ${theme.spacing(1)}px`,
  },
  tittle: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
  text: {
    padding: 0,
    margin: 0,
  },
  paragraph: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
}));
