import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// types
import { resolvers, typeDefs } from "./schema/index.js";

// server setup
const server = new ApolloServer({
  // typeDefs
  typeDefs,
  // resolver
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.info('Server is listening at', url);
