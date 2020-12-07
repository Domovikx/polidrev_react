import React from 'react';

import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useFormik } from 'formik';
import { useStyles } from './Authentication.styles';
import { Avatar, Container, Grid, Icon, Typography } from '@material-ui/core';
import { routes } from '../../constants/routes';
import { Link } from 'react-router-dom';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Введите email')
    .email('Введите правильный email'),

  password: yup
    .string()
    .required('Введите ваш password')
    .min(6, 'Ваш пароль должен быть минимум 6 символов'),
});

export const Authentication = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema,

    onSubmit: (values) => {
      console.log('onSubmit :>> ', JSON.stringify(values, null, 2));
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
          Авторизация
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
              <Button
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
                fullWidth
                size="large"
                color="primary"
                variant="contained"
                className={classes.submit}
              >
                Авторизация
              </Button>
            </Grid>

            <Grid item container justify="flex-end">
              <Grid item>
                <Button
                  component={Link}
                  to={routes.registration}
                  className={classes.link}
                >
                  Еще нет аккаунта? Регистрация
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};