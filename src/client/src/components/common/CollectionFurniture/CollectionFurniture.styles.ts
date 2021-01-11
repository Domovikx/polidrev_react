import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    display: 'grid',
    gridGap: theme.spacing(3),
    gridTemplate: `repeat(auto-fit, minmax(100px, auto)) / repeat(
          auto-fit,
          minmax(250px, auto)
        )`,
    justifyContent: 'space-around',
  },
}));
