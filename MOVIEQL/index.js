import { GraphQLServer } from "graphql-yoga";
import resolvers from "./grapql/resolvers";
const server = new GraphQLServer({
  typeDefs: "./grapql/schema.graphql",
  resolvers,
});

server.start(() => console.log("graphql server runing"));
export default server;
