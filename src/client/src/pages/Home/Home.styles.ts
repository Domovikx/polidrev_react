import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  img: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    boxShadow: '0px 50px 50px 0px white inset;',
    height: '400px',
    width: '100%',
  },

  main: {
    '& span.MuiButton-label': {
      fontSize: '15px',
      fontWeight: 'normal',
      textTransform: 'initial',
    },
  },
}));
