import { gql } from '@apollo/client';

export const commonTypeDefs = gql`
  type CommonResponse {
    message: String
  }

  type Query {
    helloQuery: CommonResponse
  }
  type Mutation {
    helloMutation: CommonResponse
  }
`;
