import { gql } from '@apollo/client';

export const userTypeDefs = gql`
  scalar Date

  type User {
    _id: ID
    email: String!
    name: String!
    password: String!
    createdAt: Date!
    updatedAt: Date!
    currency_type: String
  }

  input CreateUserInput {
    email: String!
    name: String!
    password: String!
    currency_type: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`;
