'use client';

import { PropsWithChildren } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as GrapqlProvider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SERVICE_ENDPOINT_FOR_CODEGEN,
  cache: new InMemoryCache(),
});

export const ApolloProvider = ({ children }: PropsWithChildren) => {
  return <GrapqlProvider client={client}>{children}</GrapqlProvider>;
};
