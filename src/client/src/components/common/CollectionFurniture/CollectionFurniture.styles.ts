import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  furnitureCollection: {
    display: 'grid',
    gridGap: theme.spacing(2),
    gridTemplate: `repeat(auto-fit, minmax(100px, auto)) / repeat(
          auto-fit,
          minmax(250px, auto)
        )`,
    justifyContent: 'space-around',
    margin: `${theme.spacing(2)}px 0`,
  },
}));
