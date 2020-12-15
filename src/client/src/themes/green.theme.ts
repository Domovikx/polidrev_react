import { createMuiTheme } from '@material-ui/core';

export const greenTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#004d40',
      contrastText: 'rgba(255, 255, 255, 0.8)',
    },
  },
});
