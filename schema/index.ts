import apiSchema from "./schema";
import bookQuery from "../modules/books/api/query";
import authorQuery from "../modules/authors/api/query";
import bookMutation from "../modules/books/api/mutation";
import authorMutation from "../modules/authors/api/mutation";

export const resolvers = {
  Query: { ...bookQuery, ...authorQuery },
  Mutation: {
    ...bookMutation,
    ...authorMutation,
  },
};

export const schema = apiSchema;
