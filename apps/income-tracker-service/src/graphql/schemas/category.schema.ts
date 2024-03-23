import { gql } from '@apollo/client';

export const categoryTypeDefs = gql`
  scalar Date

  type Category {
    _id: ID
    name: String
    description: String
    createdAt: Date!
    updatedAt: Date!
    category_image: String
  }

  input CreateCategoryInput {
    name: String
    description: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category
  }
`;
