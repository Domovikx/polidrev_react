import Footer from '../../parts/Footer';
import Header from '../../parts/Header';
import React, { ReactElement } from 'react';
import { Box, Container } from '@material-ui/core';
import { useStyles } from './MainLayout.styles';

export const MainLayout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Container className={classes.content}>
        <Header>{}</Header>
        <Box>{children}</Box>
      </Container>
      <Footer className={classes.footer}></Footer>
    </Box>
  );
};

interface Props {
  children: ReactElement;
}
