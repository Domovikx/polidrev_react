import * as React from 'react';
import { Box, Container } from '@material-ui/core';
import { useStyles } from './Footer.styles';

export const Footer = (props: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Container>Footer</Container>
    </Box>
  );
};
