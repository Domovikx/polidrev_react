import FormikTextField from '../../components/common/Form/FormikTextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useReducer } from 'react';
import { authInitialState, authReducer } from '../../store/auth/auth.reducer';
import { authRegister } from '../../store/auth/auth.actions';
import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import { fieldName } from '../../constants/fieldName';
import { fieldType } from '../../constants/fieldType';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { useStyles } from './Registration.styles';
import { validationSchema } from '../../validation/validationSchema';

export const Registration = () => {
  const initialValues: any = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const submitHandler = (registerData: any) => {
    dispatch(authRegister(registerData));
  };

  const classes = useStyles();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 4));
        submitHandler(values);
      }}
    >
      {({ isValid, dirty, ...props }) => (
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

              <Typography component="h1" variant="h5">
                Регистрация
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormikTextField
                    name={fieldName.email}
                    type={fieldType.text}
                    label="Email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name={fieldName.password}
                    type={fieldType.password}
                    autoComplete="new-password"
                    label="Password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    name={fieldName.passwordConfirm}
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
                    to={routes.authentication}
                    className={classes.link}
                  >
                    У Вас уже есть аккаунт? Войти
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Form>
      )}
    </Formik>
  );
};
