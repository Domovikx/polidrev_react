import { Container } from '@material-ui/core';
import * as React from 'react';
import OnFade from '../../components/common/OnFade';
import PaymentMethods from '../../components/common/PaymentMethods';

export const Payment = () => {
  return (
    <OnFade>
      <>
        <Container>
          <PaymentMethods />
          {/*TODO: <CreditConditions /> */}
        </Container>
      </>
    </OnFade>
  );
};
