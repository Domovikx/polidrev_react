import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  img: {
    maxHeight: '45px',
  },
  logoBtn: {
    marginRight: 'auto',
  },
  wrapper: {
    right: `calc((100vw - 100%)*-1)`,
    width: `100vw`,
  },
}));
