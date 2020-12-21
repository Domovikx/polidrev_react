import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  Container: {
    alignItems: 'center',
    display: 'flex',
  },
  img: {
    maxHeight: '45px',
  },
  logoBtn: {
    marginRight: 'auto',
  },
}));
