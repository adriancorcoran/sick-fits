const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const db = require("./db");

// create the GraphQL Yoga server

function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql", //  map all the data in the schema
    resolvers: {
      // use these to act on the schema
      Mutation,
      Query
    },
    resolverValidationOptions: {
      // turn off some errors
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db }) // for every request, add on the db, so we expose it thoughout the application
  });
}

module.exports = createServer;
