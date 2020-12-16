import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  content: {
    flex: '1 0 auto',
  },

  footer: {
    flexShrink: 0,
  },
}));
