import * as authorsService from "../services/service";

const query = {
  authors: async (_: any, { limit }: { limit: number }, context: any) => {
    return await authorsService.getAllAuthors(limit);
  },
  author: async (_: any, { id }: { id: string }, context: any) => {
    return await authorsService.getAuthorById(id);
  },
};

export default query;
