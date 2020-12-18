import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  img: {
    height: '400px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    boxShadow: `0px 50px 50px 0px white inset, ${theme.shadows[3]}`,
  },
  list: {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
    margin: `15px 0`,
  },
}));
