import * as React from 'react';
import CommonFade from '../../components/common/CommonFade';
import PaymentMethods from '../../components/common/PaymentMethods';
import { Container } from '@material-ui/core';

export const Payment = () => {
  return (
    <CommonFade>
      <>
        <Container>
          <PaymentMethods />
          {/*TODO: <CreditConditions /> */}
        </Container>
      </>
    </CommonFade>
  );
};
