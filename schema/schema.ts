// import { buildSchema } from "graphql";
const { gql } = require("apollo-server");

const schema = gql`
  # BOOKS
  type Query {
    books(limit: Int): [Book]
    book(id: ID!): Book
  }
  type Mutation {
    addBook(
      title: String!
      author: AuthorInput!
      description: String!
    ): BookResponse
    updateBook(
      id: ID!
      title: String
      author: AuthorInput
      description: String
    ): BookResponse
    deleteBook(id: ID!): BookResponse
  }
  input AuthorInput {
    _id: ID!
  }
  type Book {
    _id: ID!
    title: String!
    author: Author!
    description: String!
  }
  type Books {
    books: [Book]
  }
  type BookResponse {
    data: Book
    error: String
    ok: Boolean
  }
  # AUTHORS
  type Query {
    authors(limit: Int): [Author]
    author(id: ID!): Author
  }
  type Mutation {
    addAuthor(name: String!, aka: String): AuthorResponse
    updateAuthor(id: ID!, name: String!, aka: String): AuthorResponse
    deleteAuthor(id: ID!): AuthorResponse
  }
  type Author {
    _id: ID!
    name: String!
    aka: String
  }
  type Authors {
    authors: [Author]
  }
  type AuthorResponse {
    data: Author
    error: String
    ok: Boolean
  }
`;

export default schema;
