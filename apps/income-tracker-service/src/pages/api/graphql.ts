import { buildSubgraphSchema } from '@apollo/subgraph';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import { ApolloServer } from 'apollo-server-cloud-functions';
import resolvers from '../../graphql/resolvers';
import { typeDefs } from '../../graphql/schemas';
import connectMongoDB from '../../common/mongodb/mongodb';

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  cache: new InMemoryLRUCache(),
  csrfPrevention: false,
  introspection: true,
  context: ({ req }: { req: Request }) => {
    connectMongoDB();
    const { headers } = req;
    return {
      headers,
    };
  },
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const graphqlHandler = server.createHandler();
export default graphqlHandler;
