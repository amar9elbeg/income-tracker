'use client';
import { Title, Typography } from '@components/typography';
import { Link, Stack } from '@mui/material';
import { FormikState, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { Button } from 'src/components/button';
import { TextField } from 'src/components/textfield';
import * as yup from 'yup';

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

  return (
    <>
      <Stack
        spacing="8px"
        justifyContent="center"
        alignItems="center"
        px="48px"
        width="300px"
      >
        <Title>Welcome Back</Title>
        <Typography sx={{ color: '#334155' }}>
          Welcome back, Please enter your details
        </Typography>
      </Stack>
      <Stack spacing="16px" width="100%">
        <TextField
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          placeholder="Email"
          helperText={formik.errors.email}
        />
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          helperText={formik.errors.password}
          placeholder="Password"
          type="password"
        />
        <Button variant="contained" onClick={() => formik.handleSubmit()}>
          Log In
        </Button>
      </Stack>
      <Stack direction="row" spacing="12px">
        <Typography>Don’t have account?</Typography>
        <Link
          sx={{ color: '#0166FF', cursor: 'pointer' }}
          underline="none"
          onClick={handleSignUpButton}
        >
          Sign up
        </Link>
      </Stack>
    </>
  );
};

export default SignIn;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Please enter your email'),
  password: yup
    .string()
    .min(8, 'Minimum 8 characters length required')
    .required('Please enter your password'),
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
