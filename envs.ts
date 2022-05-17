import { config } from "dotenv";

config();

export default {
  port: process.env.PORT || 3000,
  graphqlPath: process.env.GRAPHQL_PATH || "/graphql",
  dbUrl: `${process.env.DB_URL}${process.env.DB_NAME}`,
};
