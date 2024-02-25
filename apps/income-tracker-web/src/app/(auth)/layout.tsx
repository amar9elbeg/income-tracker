import { GeldIcon } from '@components/icons';
import { Stack } from '@mui/material';

export const metadata = {
  title: 'Welcome to income-tracker-web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack width="100vw" height="100vh" direction="row">
      <Stack width="50vw" justifyContent="center" alignItems="center">
        <Stack>
          <Stack justifyContent="center" alignItems="center" spacing="40px">
            <GeldIcon />
            {children}
          </Stack>
        </Stack>
      </Stack>
      <Stack width="50vw" height="100%" bgcolor="#0166FF" />
    </Stack>
  );
}
