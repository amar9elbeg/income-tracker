import { createTransaction } from './mutations/create-transaction';
import { createUser } from './mutations/create-user';
import { createCategory } from './mutations/create-category';
import { helloMutation } from './mutations/hello';
import { helloQuery } from './queries/hello';
import { expenseQuery } from './queries/expense';

const resolvers = {
  Query: { helloQuery, expenseQuery },
  Mutation: { helloMutation, createUser, createCategory, createTransaction },
};

export default resolvers;
