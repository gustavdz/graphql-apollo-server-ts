import { Schema, model, Model } from "mongoose";
import { IAuthor } from "../../authors/model/authors";

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
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Authors",
  },
});

export interface IBook {
  _id: string;
  title: string;
  description: string;
  author: IAuthor;
}

const BookModel: Model<IBook> = model("Books", bookSchema);
export default BookModel;
