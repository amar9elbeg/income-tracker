import { gql } from '@apollo/client';

export const transactionTypeDefs = gql`
  scalar Date

  type Transaction {
    _id: ID
    user_id: ID
    name: String
    amount: Int
    transaction_type: String
    description: String
    createdAt: Date!
    updatedAt: Date!
    category_id: ID
  }

  input CreateTransactionInput {
    user_id: String
    name: String
    amount: Int
    transaction_type: String
    description: String
    category_id: String
  }

  type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction
  }

  enum TransactionType {
    EXP
    INC
  }

  input ExpenseQueryInput {
    pageSize: Int!
    pageNumber: Int!
    type: TransactionType
    categoryIds: [String]
    minAmount: Int
    maxAmount: Int
  }

  type Query {
    expenseQuery(args: ExpenseQueryInput): [Transaction]
  }
`;
