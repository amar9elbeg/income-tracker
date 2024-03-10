import { ApolloProvider } from 'src/common/graphql/apollo-provider';

export const metadata = {
  title: 'Welcome to income-tracker-web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  );
}
