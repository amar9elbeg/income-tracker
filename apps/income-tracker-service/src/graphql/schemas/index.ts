import { mergeTypeDefs } from '@graphql-tools/merge';
import { commonTypeDefs } from './common.schema';
import { userTypeDefs } from './user.schema';
import { categoryTypeDefs } from './category.schema';
import { transactionTypeDefs } from './transaction.schema';

export const typeDefs = mergeTypeDefs([
  commonTypeDefs,
  userTypeDefs,
  categoryTypeDefs,
  transactionTypeDefs
]);
