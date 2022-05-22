import * as authorsService from "../services/service";

const query = {
  authors: async (_: any, { limit }: { limit: number }, context: any) => {
    // return limit ? authorsData.slice(0, limit) : authorsData;
    return await authorsService.getAllAuthors(limit);
  },
  author: async (_: any, { id }: { id: string }, context: any) => {
    // return authorsData.find(author => author.id === id);
    return await authorsService.getAuthorById(id);
  },
};

export default query;
