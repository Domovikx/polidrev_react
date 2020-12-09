import { TextFieldProps } from '@material-ui/core';

export type Props = {
  name: string;
  label: string;
  type: string;
} & TextFieldProps;
