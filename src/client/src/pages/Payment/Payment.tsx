import * as React from 'react';
import CommonFade from '../../components/common/CommonFade';
import CreditConditions from '../../components/common/CreditConditions';
import PaymentMethods from '../../components/common/PaymentMethods';
import { Container } from '@material-ui/core';

export const Payment = () => {
  return (
    <CommonFade>
      <>
        <Container>
          <PaymentMethods />
          <CreditConditions />
        </Container>
      </>
    </CommonFade>
  );
};
