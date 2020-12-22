import * as React from 'react';
import { InputAdornment } from '@material-ui/core';

import {
  VisibilityIcon,
  VisibilityOffIcon,
  IconButton,
} from '../../../assets/Icons';

import { Props } from './CommonEndAdornment.types';

export const CommonEndAdornment = ({
  handleClick,
  showPassword,
}: Props): JSX.Element => (
  <InputAdornment position="end">
    <IconButton aria-label="toggle password visibility" onClick={handleClick}>
      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </IconButton>
  </InputAdornment>
);
