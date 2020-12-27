import React from 'react';
import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import { Form, Formik, FormikProps } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CommonEndAdornment from '../../components/common/CommonEndAdornment';
import FormikTextField from '../../components/common/Form/FormikTextField';
import notificationCreator from '../../components/common/notificationCreator';
import { authLoginAction } from '../../store/auth/auth.actions';
import { AuthRegisterValues } from '../../store/auth/auth.types';
import { closeSnackbarAction } from '../../store/notifier/notifier.actions';
import { fieldName } from '../../constants/fieldName';
import { fieldType } from '../../constants/fieldType';
import { Key } from '../../components/common/notificationCreator/notificationCreator.types';
import { Locations } from '../../constants/locations';
import { LockOutlineIcon } from '../../assets/Icons';
import { validationSchema } from '../../validation/validationSchemes/authentication.validationSchema';

import { LocalState } from './Authentication.types';
import { useStyles } from './Authentication.styles';

export const Authentication = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [values, setValues] = React.useState<LocalState>({
    showPassword: false,
  });

  const initialValues: AuthRegisterValues = {
    email: '',
    password: '',
  };

  const submitHandler = (formValues: AuthRegisterValues) => {
    dispatch(authLoginAction(formValues));
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // TODO - remove it after testing
  const closeSnackbar = (key: Key) => dispatch(closeSnackbarAction(key));

  const handleClick = () => {
    notificationCreator({
      dispatch,
      message: 'message 222',
      variant: 'warning',
    });
  };

  // TODO - remove it
  const handleDismissAll = () => closeSnackbar(null);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(v) => submitHandler(v)}
      >
        {(props: FormikProps<AuthRegisterValues>) => {
          const { isValid, dirty } = props;

          return (
            <Form>
              <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                  <Avatar
                    className={
                      !isValid || !dirty
                        ? classes.errorIcon
                        : classes.successIcon
                    }
                  >
                    <LockOutlineIcon />
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
                        type={
                          values.showPassword
                            ? fieldType.text
                            : fieldType.password
                        }
                        label="Password"
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <CommonEndAdornment
                              showPassword={values.showPassword}
                              handleClick={handleClickShowPassword}
                            />
                          ),
                        }}
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
                        to={Locations.Auth_Registration}
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

      {/* TODO: for testing */}
      <Button variant="contained" onClick={handleClick}>
        Display snackbar
      </Button>

      <Button variant="contained" onClick={handleDismissAll}>
        Dismiss all snackbars
      </Button>
    </>
  );
};
