import React from 'react';

import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Avatar, Container, Grid, Typography } from '@material-ui/core';
import { useStyles } from './Registration.styles';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { routes } from '../../constants/routes';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { useReducer } from 'react';
import { authInitialState, authReducer } from '../../store/auth/authReducer';
import { authRegister } from '../../store/auth/authActions';
import { RegisterData } from '../../store/auth/authTypes';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Введите email')
    .email('Введите правильный email'),

  password: yup
    .string()
    .required('Введите ваш password')
    .min(6, 'Ваш пароль должен быть минимум 6 символов'),

  confirmPassword: yup
    .string()
    .required('Это поле обязательно')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const Registration = () => {
  const classes = useStyles();

  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    } as RegisterData,

    validationSchema,

    onSubmit: (registerData) => {
      dispatch(authRegister(registerData));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar
          className={
            !formik.isValid || !formik.dirty
              ? classes.errorIcon
              : classes.successIcon
          }
        >
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>

        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                autoComplete="new-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                label="ConfirmPassword"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
                fullWidth
                size="large"
                color="primary"
                variant="contained"
                className={classes.submit}
              >
                Регистрация
              </Button>
            </Grid>

            <Grid item container justify="flex-end">
              <Grid item>
                <Button
                  component={Link}
                  to={routes.authentication}
                  className={classes.link}
                >
                  У Вас уже есть аккаунт? Войти
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
