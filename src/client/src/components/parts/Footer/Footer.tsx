import * as React from 'react';
import { Box, Button, Container } from '@material-ui/core';
import { useStyles } from './Footer.styles';

export const Footer = (props: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Container>
        <Button className={classes.btn} href="tel:+375(33)-675-54-75">
          +375(33)675-54-75
        </Button>
        <Button className={classes.btn} href="tel:+375(29)-652-71-51">
          +375(29)652-71-51
        </Button>
      </Container>
    </Box>
  );
};
