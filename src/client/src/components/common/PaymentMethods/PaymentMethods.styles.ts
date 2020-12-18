import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 120px)',
    gap: theme.spacing(3),
  },
  img: {
    maxWidth: 60,
    maxHeight: 60,
    alignSelf: 'center',
  },
  paper: {
    display: 'grid',
    width: 'max-content',
    minWidth: '120px',
    minHeight: '120px',
    placeContent: 'center',
    justifyItems: 'center',
    padding: '10px',
    gridTemplateRows: '1fr auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '16px',
    boxShadow: theme.shadows[3],
  },
  tittle: {
    margin: `0 0 ${theme.spacing(1)}px`,
  },
  text: {
    padding: 0,
    margin: 0,
  },
}));
