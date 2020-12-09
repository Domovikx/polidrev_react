import * as yup from 'yup';
import { emailValidation } from './email.validation';
import { passwordValidation } from './password.validation';
import { passwordConfirmValidation } from './passwordConfirm.validation';

export const validationSchema = yup.object({
  email: emailValidation,
  password: passwordValidation(6),
  passwordConfirm: passwordConfirmValidation('password'),
});
