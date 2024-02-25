'use client';
import { Title, Typography } from '@components/typography';
import { Link, Stack } from '@mui/material';
import { FormikState, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { Button } from 'src/components/button';
import { TextField } from 'src/components/textfield';
import * as yup from 'yup';

type FormikHandleSubmitType = {
  values: { name: string; email: string; password: string; repassword: string };
  resetForm: (
    // eslint-disable-next-line no-unused-vars
    nextState?:
      | Partial<
          FormikState<{
            name: string;
            email: string;
            password: string;
            repassword: string;
          }>
        >
      | undefined
  ) => void;
};

const validationSchema = yup.object({
  name: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Please enter your email'),
  password: yup
    .string()
    .min(8, 'Minimum 8 characters length required')
    .required('Please enter your password'),
  repassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const SignUp = () => {
  const router = useRouter();
  const handleSignInButton = () => {
    router.push('/sign-in');
  };

  const formik = useFormik({
    onSubmit: async (values, { resetForm }) => {
      await handleSubmit({ values, resetForm });
    },
    validateOnChange: false,
    initialValues: { name: '', email: '', password: '', repassword: '' },
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
        <Title>Sign up</Title>
      </Stack>
      <Stack spacing="16px" width="100%">
        <TextField
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange('name')}
          helperText={formik.errors.name}
        />
        <TextField
          value={formik.values.email}
          placeholder="Email"
          onChange={formik.handleChange('email')}
          helperText={formik.errors.email}
        />
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          helperText={formik.errors.password}
          placeholder="Password"
          type="password"
        />
        <TextField
          value={formik.values.repassword}
          onChange={formik.handleChange('repassword')}
          helperText={formik.errors.repassword}
          type="password"
          placeholder="Re-enter password"
        />
        <Button onClick={() => formik.handleSubmit()}>Sign Up</Button>
      </Stack>
      <Stack direction="row" spacing="12px">
        <Typography>Already have an account?</Typography>
        <Link
          sx={{ color: '#0166FF', cursor: 'pointer' }}
          onClick={handleSignInButton}
          underline="none"
        >
          Sign in
        </Link>
      </Stack>
    </>
  );
};

export default SignUp;
