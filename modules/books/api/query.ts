import * as booksService from "../services/service";

const query = {
  books: async (_: any, { limit }: { limit: number }, context: any) => {
    // return limit ? booksData.slice(0, limit) : booksData;
    return await booksService.getAllBooks(limit);
  },
  book: async (_: any, { id }: { id: string }, context: any) => {
    // return booksData.find(book => book.id === id);
    return await booksService.getBookById(id);
  },
};

export default query;
