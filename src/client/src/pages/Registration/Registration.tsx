import React, { useReducer } from 'react';
import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import { Form, Formik, FormikProps } from 'formik';
import { Link } from 'react-router-dom';

import FormikTextField from '../../components/common/Form/FormikTextField';
import { authInitialState, authReducer } from '../../store/auth/auth.reducer';
import { authRegister } from '../../store/auth/auth.actions';
import { fieldName } from '../../constants/fieldName';
import { fieldType } from '../../constants/fieldType';
import { Locations } from '../../constants/locations';
import { LockOutlineIcon } from '../../assets/Icons';
import { validationSchema } from '../../validation/validationSchemes/registration.validationSchema';

import { FormValues } from './Registration.types';
import { useStyles } from './Registration.styles';

export const Registration = (): JSX.Element => {
  const classes = useStyles();

  const initialValues: FormValues = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const submitHandler = (formValues: FormValues) => {
    dispatch(authRegister(formValues));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(v) => submitHandler(v)}
    >
      {(props: FormikProps<FormValues>) => {
        const { isValid, dirty } = props;

        return (
          <Form>
            <Container component="main" maxWidth="xs">
              <div className={classes.paper}>
                <Avatar
                  className={
                    !isValid || !dirty ? classes.errorIcon : classes.successIcon
                  }
                >
                  <LockOutlineIcon />
                </Avatar>

                <Typography
                  component="h1"
                  variant="h5"
                  className={classes.typography}
                >
                  Регистрация
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormikTextField
                      formikkey={fieldName.email}
                      type={fieldType.text}
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormikTextField
                      formikkey={fieldName.password}
                      type={fieldType.password}
                      label="Password"
                      variant="outlined"
                      autoComplete="new-password"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormikTextField
                      formikkey={fieldName.passwordConfirm}
                      type={fieldType.password}
                      label="Password confirm"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type={fieldType.submit}
                      disabled={!isValid || !dirty}
                      fullWidth
                      size="large"
                      color="primary"
                      variant="contained"
                      className={classes.submit}
                    >
                      Регистрация
                    </Button>
                  </Grid>
                </Grid>

                <Grid item container justify="flex-end">
                  <Grid item>
                    <Button
                      component={Link}
                      to={Locations.Auth_Authentication}
                      className={classes.link}
                    >
                      У Вас уже есть аккаунт? Войти
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};
