import { mergeTypeDefs } from '@graphql-tools/merge';
import { commonTypeDefs } from './common.schema';
import { userTypeDefs } from './user.schema';

export const typeDefs = mergeTypeDefs([commonTypeDefs, userTypeDefs]);
