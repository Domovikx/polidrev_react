import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Locations } from '../../../constants/locations';
import { authLogoutThunk } from '../../../store/auth/auth.actions';

export const ButtonLogout = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = async () => {
    await dispatch(authLogoutThunk());
    await history.push(Locations.Index);
  };

  return (
    <Button color="primary" onClick={logout}>
      Выход
    </Button>
  );
};
