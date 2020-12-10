import FormikTextField from '../../components/common/Form/FormikTextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useReducer } from 'react';
import { authInitialState, authReducer } from '../../store/auth/auth.reducer';
import { authLogin } from '../../store/auth/auth.actions';
import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import { fieldName } from '../../constants/fieldName';
import { fieldType } from '../../constants/fieldType';
import { Form, Formik, FormikProps } from 'formik';
import { FormValues } from './Authentication.types';
import { Link } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { useStyles } from './Authentication.styles';
import { validationSchema } from '../../validation/validationSchemes/authentication.validationSchema';

export const Authentication = () => {
  const classes = useStyles();

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const submitHandler = (formValues: FormValues) => {
    dispatch(authLogin(formValues));
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
                  <LockOutlinedIcon />
                </Avatar>

                <Typography
                  component="h1"
                  variant="h5"
                  className={classes.typography}
                >
                  Авторизация
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
                      Авторизация
                    </Button>
                  </Grid>
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
              </div>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};
