import React, { ErrorInfo } from 'react';
import { Button, Grid } from '@material-ui/core';
import { Locations } from '../../../constants/locations';

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('error, info :>> ', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Grid container direction="column" justify="center" alignItems="center">
          <h1>Что-то пошло не так. Произошла ошибка.</h1>
          <Button href={Locations.Index}>Вернуться на главную страницу</Button>
        </Grid>
      );
    }

    return this.props.children;
  }
}
