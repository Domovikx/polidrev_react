import * as yup from 'yup';

import { PASSWORD_MIN_LENGTH } from '../../constants/auth';

export const passwordValidation = (
  minLength = PASSWORD_MIN_LENGTH,
): yup.StringSchema =>
  yup
    .string()
    .required('Введите ваш password')
    .min(minLength, `Ваш пароль должен быть минимум ${minLength} символов`);
