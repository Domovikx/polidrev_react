import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  logoBtn: {
    marginRight: 'auto',
  },
  Container: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    maxHeight: '45px',
  },
}));
