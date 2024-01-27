import { helloMutation } from './mutations/hello';
import { helloQuery } from './queries/hello';

const resolvers = {
  Query: { helloQuery },
  Mutation: { helloMutation },
};

export default resolvers;
