import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;


// resolvers need to match fields from type definition 
const resolvers = {
  Query: {
    greeting: () => 'Hello world!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers });
const serverInfo = await server.listen({ port: 9000 });
console.log(`Server running at ${serverInfo.url}`);