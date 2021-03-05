import { Container } from '@material-ui/core';
import React from 'react';

import CommonFade from '../../components/common/CommonFade';

import { useStyles } from './ServiceConditions.styles';

export const ServiceConditions = (): JSX.Element => {
  const classes = useStyles();

  return (
    <CommonFade>
      <Container>
        <>ServiceConditions</>
      </Container>
    </CommonFade>
  );
};
