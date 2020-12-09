import React from 'react';

import { TextField } from '@material-ui/core';
import { useField } from 'formik';
import { Props } from './FormikTextField.types';

export const FormikTextField = ({ name, label, type, ...props }: Props) => {
  const [field, meta] = useField(name);
  return (
    <TextField
      name={field.name}
      type={type}
      label={label}
      value={field.value}
      onBlur={field.onBlur}
      onChange={field.onChange}
      helperText={meta.touched && meta.error}
      error={meta.touched && Boolean(meta.error)}
      fullWidth
      {...props}
    />
  );
};
