import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  card: {
    boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`,
    maxWidth: 345,
  },
  cardActionArea: {
    display: 'grid',
    height: '100%',
    justifyContent: 'normal',
  },
  cardMediaWrapper: {
    padding: `0 ${theme.spacing(2)}px`,
  },
  center: {
    textAlign: 'center',
  },
  img: {
    maxHeight: '100px',
    maxWidth: '200px',
  },
  media: {
    backgroundSize: 'contain',
    height: 0,
    paddingTop: '56.25%',
  },
  paragraph: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
  title: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
}));
