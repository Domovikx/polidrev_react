import React from 'react';
import { Container } from '@material-ui/core';

import { Props } from './AuthLayout.types';

export const AuthLayout = ({ children }: Props): JSX.Element => (
  <Container>{children}</Container>
);
