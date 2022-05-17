import apiSchema from "./schema";
import bookQuery from "../modules/books/api/query";
import bookMutation from "../modules/books/api/mutation";

export const resolver = {
  ...bookQuery,
  ...bookMutation,
};

export const schema = apiSchema;
