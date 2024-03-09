import { createUser } from './mutations/create-user';
import { helloMutation } from './mutations/hello';
import { helloQuery } from './queries/hello';

const resolvers = {
  Query: { helloQuery },
  Mutation: { helloMutation, createUser },
};

export default resolvers;
