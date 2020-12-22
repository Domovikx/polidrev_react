import * as React from 'react';
import { Container } from '@material-ui/core';

import CommonFade from '../../components/common/CommonFade';
import CreditConditions from '../../components/common/CreditConditions';
import PaymentMethods from '../../components/common/PaymentMethods';

export const Payment = (): JSX.Element => (
  <CommonFade>
    <Container>
      <PaymentMethods />
      <CreditConditions />
    </Container>
  </CommonFade>
);
