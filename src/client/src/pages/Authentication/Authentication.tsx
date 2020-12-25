import React, { useReducer } from 'react';
import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import { Form, Formik, FormikProps } from 'formik';
import { Link } from 'react-router-dom';
import { uid } from 'uid';

import CommonEndAdornment from '../../components/common/CommonEndAdornment';
import FormikTextField from '../../components/common/Form/FormikTextField';
import { authLoginAction } from '../../store/auth/auth.actions';
import { authReducer, authState } from '../../store/auth/auth.reducer';
import { AuthRegisterValues } from '../../store/auth/auth.types';
import {
  closeSnackbarAction,
  enqueueSnackbarAction,
} from '../../store/notifier/notifier.actions';
import { fieldName } from '../../constants/fieldName';
import { fieldType } from '../../constants/fieldType';
import { Locations } from '../../constants/locations';
import { LockOutlineIcon } from '../../assets/Icons';
import { validationSchema } from '../../validation/validationSchemes/authentication.validationSchema';
import {
  notifierReducer,
  notifierState,
} from '../../store/notifier/notifier.reducer';

import { LocalState } from './Authentication.types';
import { useStyles } from './Authentication.styles';

export interface NotificationValues {
  message: string;
  options?: {
    action?: JSX.Element | any;
    key?: string;
    variant?: string;
  };
}

export const Authentication = (): JSX.Element => {
  const classes = useStyles();

  const [values, setValues] = React.useState<LocalState>({
    showPassword: false,
  });

  const initialValues: AuthRegisterValues = {
    email: '',
    password: '',
  };

  const [stateAuth, dispatchAuth] = useReducer(authReducer, authState);
  const [stateNotifier, dispatchNotifier] = useReducer(
    notifierReducer,
    notifierState,
  );

  const submitHandler = (formValues: AuthRegisterValues) => {
    dispatchAuth(authLoginAction(formValues));
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // TODO - remove it
  const enqueueSnackbar = (notification: NotificationValues) => {
    dispatchNotifier(enqueueSnackbarAction(notification));
  };
  const handleClick = () => {
    enqueueSnackbar({
      message: 'Failed fetching data. 000',
      options: {
        action: (key: string | null) => (
          <Button onClick={() => closeSnackbarAction(key)}>dismiss me</Button>
        ),
        key: uid(),
        variant: 'warning',
      },
    });
  };

  // TODO - remove it
  const handleDismissAll = () => {
    // closeSnackbarAction();
  };

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
