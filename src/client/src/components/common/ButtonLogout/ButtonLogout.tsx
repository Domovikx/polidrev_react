import React from 'react';
import { Button } from '@material-ui/core';
import { useAtom } from 'jotai';
import { useHistory } from 'react-router-dom';

import { Locations } from '../../../constants/locations';
import { authLogoutAtom } from '../../../storeAtom/auth.atom';

export const ButtonLogout = (): JSX.Element => {
  const history = useHistory();

  const [, logoutAction] = useAtom(authLogoutAtom);

  const logout = async () => {
    await logoutAction();
    await history.push(Locations.Index);
  };

  return (
    <Button color="primary" onClick={logout}>
      Выход
    </Button>
  );
};
