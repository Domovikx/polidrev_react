import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Locations } from '../../../constants/locations';
import { logoutService } from '../../../services/logout.service';

export const ButtonLogout = (): JSX.Element => {
  const history = useHistory();

  const logout = async () => {
    await logoutService();
    await history.push(Locations.Index);
  };

  return (
    <Button color="primary" onClick={logout}>
      Выход
    </Button>
  );
};
