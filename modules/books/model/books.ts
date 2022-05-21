import { Schema, model, Model } from "mongoose";

const bookSchema: Schema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export interface IBook {
  _id: string;
  title: string;
  description: string;
  author: string;
}

const BookModel: Model<IBook> = model("Books", bookSchema);
export default BookModel;
