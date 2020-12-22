import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  list: {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
    margin: `15px 0`,
  },
}));
