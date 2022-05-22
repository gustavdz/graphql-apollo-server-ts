import * as authorsService from "../services/service";

const mutation = {
  addAuthor: async (_: any, { name, aka }: Author, context: any) => {
    try {
      const author = await authorsService.createAuthor({
        name,
        ...(aka && { aka }),
      });
      return {
        data: author,
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
  updateAuthor: async (
    _: any,
    { id, name, aka }: Author & { id: string },
    context: any
  ) => {
    try {
      const author = await authorsService.updateAuthor(id, {
        name,
        aka,
      });
      if (!author) {
        return {
          data: null,
          ok: false,
          error: "Author not found",
        };
      }
      return {
        data: author,
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
  deleteAuthor: async (_: any, { id }: { id: string }, contex: any) => {
    // const author = authors.find(author => author.id === id)

    // authors = authors.filter(author => author.id !== id)
    try {
      const author = await authorsService.deleteAuthor(id);
      if (!author) {
        return {
          data: null,
          ok: false,
          error: "Author not found",
        };
      }
      return {
        data: author,
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
export interface Author {
  name: string;
  aka?: string;
}

export default mutation;
