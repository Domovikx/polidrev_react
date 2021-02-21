import React, { useState } from 'react';
import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import { Form, Formik, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CommonEndAdornment from '../../components/common/CommonEndAdornment';
import FormikTextField from '../../components/common/Form/FormikTextField';
import { fieldName } from '../../constants/fieldName';
import { fieldType } from '../../constants/fieldType';
import { Locations } from '../../constants/locations';
import { LockOutlineIcon } from '../../assets/Icons';
import { validationSchema } from '../../validation/validationSchemes/authentication.validationSchema';
import { RootState } from '../../store/store.types';
import { authLoginThunk } from '../../store/auth/auth.actions';

import { useStyles } from './Authentication.styles';
import { AuthRegisterValues, LocalState } from './Authentication.types';

export const Authentication = (): JSX.Element => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const classes = useStyles();
  const history = useHistory();

  if (isAuth) {
    history.push(Locations.Admin_Products);
  }

  const [values, setValues] = useState<LocalState>({
    showPassword: false,
  });

  const initialValues: AuthRegisterValues = {
    email: '',
    password: '',
  };

  const submitHandler = (formValues: AuthRegisterValues) => {
    dispatch(authLoginThunk(formValues));
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
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
              </div>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};
