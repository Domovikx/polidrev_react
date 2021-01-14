import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  content: {
    alignSelf: 'center',
  },
  grid: {
    display: 'grid',
    gap: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
    },
  },
  imageGallery: {},
}));
