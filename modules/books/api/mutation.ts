import * as booksService from "../services/service";

const mutation = {
  addBook: async ({ title, author, description }: Book, context: any) => {
    try {
      const book = await booksService.createBook({
        title,
        author,
        description,
      });
      // const book = { id: `${books.length+1}`, title, author, description }
      // books.push(book)
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
  deleteBook: async ({ id }: { id: string }, contex: any) => {
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
  author: string;
}

export default mutation;