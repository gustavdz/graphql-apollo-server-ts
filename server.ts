import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema, resolver } from "./schema";
import envs from "./envs";
import db from "./db/connect";

db.once("open", async () => {
  console.log("Connected to MongoDB");
});

db.on("error", async (err: Error) => {
  console.log("Error connecting to MongoDB", err.message);
  process.exit(1);
});

const app = express();
app.use(express.json());

app.use(
  envs.graphqlPath,
  graphqlHTTP((request, response, graphQLParams) => ({
    schema,
    rootValue: resolver,
    graphiql: true,
    context: {
      request,
      response,
    },
  }))
);

app.listen(envs.port, () => {
  console.log(
    `Server is running at http://localhost:${envs.port}${envs.graphqlPath}`
  );
});
