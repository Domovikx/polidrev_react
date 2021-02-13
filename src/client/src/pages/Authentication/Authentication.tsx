import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import { Form, Formik, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';

import CommonEndAdornment from '../../components/common/CommonEndAdornment';
import FormikTextField from '../../components/common/Form/FormikTextField';
import { AuthRegisterValues } from '../../store/auth/auth.types';
import { fieldName } from '../../constants/fieldName';
import { fieldType } from '../../constants/fieldType';
import { Locations } from '../../constants/locations';
import { LockOutlineIcon } from '../../assets/Icons';
import { validationSchema } from '../../validation/validationSchemes/authentication.validationSchema';
import { authLoginAtom } from '../../storeAtom/auth.atom';

import { LocalState } from './Authentication.types';
import { useStyles } from './Authentication.styles';

export const Authentication = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const [isLogin, login] = useAtom(authLoginAtom);

  if (isLogin) {
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
    login(formValues);
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
