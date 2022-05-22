import AuthorModel from "../model/authors";

export const getAllAuthors = async (limit: number) => {
  return await AuthorModel.find({}).limit(limit);
};

export const getAuthorById = async (id: string) => {
  return await AuthorModel.findById(id);
};

export const createAuthor = async ({
  name,
  aka,
}: {
  name: string;
  aka?: string;
}) => {
  return await AuthorModel.create({ name, aka });
};

export const updateAuthor = async (
  id: string,
  { name, aka }: { name: string; aka?: string }
) => {
  const update: { name?: string; aka?: string } = {};
  if (name) update.name = name;
  if (aka) update.aka = aka;
  await AuthorModel.findByIdAndUpdate(id, update);
  return AuthorModel.findById(id);
};

export const deleteAuthor = async (id: string) => {
  return await AuthorModel.findByIdAndDelete(id);
};
