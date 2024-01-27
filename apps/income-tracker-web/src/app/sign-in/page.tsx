'use client';
import { Button } from 'src/components/button';
import { GeldIcon } from 'src/components/icons';
import { TextField } from 'src/components/textfield';
import { Stack, Typography } from '@mui/material';
import { FormikState, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Minimum 8 characters length required')
    .required('Password is required'),
});

type FormikHandleSubmitType = {
  values: { email: string; password: string };
  resetForm: (
    // eslint-disable-next-line no-unused-vars
    nextState?:
      | Partial<
          FormikState<{
            email: string;
            password: string;
          }>
        >
      | undefined
  ) => void;
};

const SignIn = () => {
  const router = useRouter();
  const handleSignUpButton = () => {
    router.push('/sign-up');
  };

  const formik = useFormik({
    onSubmit: async (values, { resetForm }) => {
      await handleSubmit({ values, resetForm });
    },
    validateOnChange: false,
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    validateOnBlur: false,
  });

  const handleSubmit = async ({
    values,
    resetForm,
  }: FormikHandleSubmitType) => {
    console.log(values);
    resetForm();
  };

  const handleFormSubmit = () => formik.handleSubmit();

  return (
    <Stack width="100vw" height="100vh" direction="row">
      <Stack width="50vw" justifyContent="center" alignItems="center">
        <Stack>
          <Stack justifyContent="center" alignItems="center" spacing="40px">
            <GeldIcon />
            <Stack
              spacing="8px"
              justifyContent="center"
              alignItems="center"
              px="48px"
            >
              <Typography
                color="#0F172A"
                fontWeight="600"
                fontSize="24px"
                lineHeight="32px"
              >
                Welcome Back
              </Typography>
              <Typography
                color="#334155"
                fontWeight="400"
                fontSize="16px"
                lineHeight="24px"
              >
                Welcome back, Please enter your details
              </Typography>
            </Stack>
            <Stack spacing="16px" width="100%">
              <TextField
                fullWidth
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                helperText={
                  <Typography color="red">{formik.errors.email}</Typography>
                }
              />
              <TextField
                fullWidth
                placeholder="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange('password')}
                helperText={
                  <Typography color="red">{formik.errors.password}</Typography>
                }
              />
              <Button type="submit" onClick={handleFormSubmit}>
                Log in
              </Button>
            </Stack>
            <Stack direction="row" spacing="12px">
              <Typography
                fontWeight="400"
                fontSize="16px"
                lineHeight="24px"
                color="#0F172A"
              >
                Don’t have account?
              </Typography>
              <Typography color="#0166FF" onClick={handleSignUpButton}>
                Sign up
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack width="50vw" height="100%" bgcolor="#0166FF" />
    </Stack>
  );
};

export default SignIn;
