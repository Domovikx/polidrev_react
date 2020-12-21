import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  img: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    boxShadow: `0px 50px 50px 0px white inset, ${theme.shadows[3]}`,
    height: '400px',
    width: '100%',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
    margin: `15px 0`,
  },
}));
