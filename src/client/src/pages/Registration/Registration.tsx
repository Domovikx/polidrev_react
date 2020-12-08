import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { authInitialState, authReducer } from '../../store/auth/auth.reducer';
import { authRegister } from '../../store/auth/auth.actions';
import { Avatar, Container, Grid, Typography } from '@material-ui/core';
import { emailValidation } from '../../validation/email.validation';
import { fieldName } from '../../constants/fieldName';
import { fieldType } from '../../constants/fieldType';
import { Link } from 'react-router-dom';
import { passwordConfirmValidation } from '../../validation/passwordConfirm.validation';
import { passwordValidation } from '../../validation/password.validation';
import { routes } from '../../constants/routes';
import { useFormik } from 'formik';
import { useReducer } from 'react';
import { useStyles } from './Registration.styles';

const validationSchema = yup.object({
  email: emailValidation,
  password: passwordValidation(6),
  passwordConfirm: passwordConfirmValidation('password'),
});

export const Registration = () => {
  const classes = useStyles();

  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },

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
                name={fieldName.email}
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
                name={fieldName.password}
                type={fieldType.password}
                label="Password"
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
                name={fieldName.passwordConfirm}
                type={fieldType.password}
                label="Password confirm"
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.passwordConfirm &&
                  Boolean(formik.errors.passwordConfirm)
                }
                helperText={
                  formik.touched.passwordConfirm &&
                  formik.errors.passwordConfirm
                }
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type={fieldType.submit}
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
