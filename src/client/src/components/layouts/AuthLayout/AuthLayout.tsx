import { Container } from '@material-ui/core';
import React, { ReactElement } from 'react';

export const AuthLayout = ({ children }: Props): JSX.Element => (
  <Container>
    {/* TODO: Temporary marker for testing*/}
    AuthLayout
    {children}
  </Container>
);

interface Props {
  children: ReactElement;
}
