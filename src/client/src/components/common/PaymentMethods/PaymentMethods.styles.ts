import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  img: {
    alignSelf: 'center',
    maxHeight: 60,
    maxWidth: 60,
  },
  list: {
    display: 'grid',
    gap: theme.spacing(3),
    gridTemplateColumns: 'repeat(auto-fit, 120px)',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '16px',
    boxShadow: theme.shadows[3],
    display: 'grid',
    gridTemplateRows: '1fr auto',
    justifyItems: 'center',
    minHeight: '120px',
    minWidth: '120px',
    padding: '10px',
    placeContent: 'center',
    width: 'max-content',
  },
  text: {
    margin: 0,
    padding: 0,
  },
  title: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
}));
