import * as booksService from "../services/service";
import { Author } from "../../authors/api/mutation";

const mutation = {
  addBook: async (
    _: any,
    { title, author, description }: Book,
    context: any
  ) => {
    try {
      const book = await booksService.createBook({
        title,
        author,
        description,
      });
      return {
        data: book,
        ok: true,
        error: "",
      };
    } catch (error: any) {
      return {
        data: null,
        ok: false,
        error: error.message,
      };
    }
  },
  updateBook: async (
    _: any,
    { id, title, author, description }: Book & { id: string },
    context: any
  ) => {
    try {
      const book = await booksService.updateBook(id, {
        title,
        author,
        description,
      });
      if (!book) {
        return {
          data: null,
          ok: false,
          error: "Book not found",
        };
      }
      return {
        data: book,
        ok: true,
        error: "",
      };
    } catch (error: any) {
      return {
        data: null,
        ok: false,
        error: error.message,
      };
    }
  },
  deleteBook: async (_: any, { id }: { id: string }, contex: any) => {
    // const book = books.find(book => book.id === id)

    // books = books.filter(book => book.id !== id)
    try {
      const book = await booksService.deleteBook(id);
      if (!book) {
        return {
          data: null,
          ok: false,
          error: "Book not found",
        };
      }
      return {
        data: book,
        ok: true,
        error: "",
      };
    } catch (error: any) {
      return {
        data: null,
        ok: false,
        error: error.message,
      };
    }
  },
};
interface Book {
  title: string;
  description: string;
  author: Author;
}

export default mutation;
