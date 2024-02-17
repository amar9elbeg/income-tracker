'use client';
import { LinkButton, SignUpButton } from 'src/components/button';
import { EmailField, PasswordField, TextField } from 'src/components/textfield';
import { Stack } from '@mui/material';
import { FormikState, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import { Title, Typography } from '@components/typography';

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
        <EmailField
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          helperText={formik.errors.email}
        />
        <PasswordField
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          helperText={formik.errors.password}
        />
        <PasswordField
          value={formik.values.repassword}
          onChange={formik.handleChange('repassword')}
          helperText={formik.errors.repassword}
          placeholder="Re-enter password"
        />
        <SignUpButton onClick={() => formik.handleSubmit()} />
      </Stack>
      <Stack direction="row" spacing="12px">
        <Typography>Already have an account?</Typography>
        <LinkButton onClick={handleSignInButton}>Sign in</LinkButton>
      </Stack>
    </>
  );
};

export default SignUp;

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
