import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { schema, resolvers } from "./schema";
import db from "./db/connect";

db.once("open", async () => {
  console.log("Connected to MongoDB");
});

db.on("error", async (err: Error) => {
  console.log("Error connecting to MongoDB", err.message);
  process.exit(1);
});

export const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  // introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

const port = process.env.PORT || 3000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server  ready at ${url}`);
});
