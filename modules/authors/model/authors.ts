import { Schema, model, Model } from "mongoose";

const authorSchema: Schema = new Schema<IAuthor>({
  name: {
    type: String,
    required: true,
  },
  aka: {
    type: String,
    required: false,
  },
});

export interface IAuthor {
  _id: string;
  name: string;
  aka?: string;
}

const AuthorModel: Model<IAuthor> = model("Authors", authorSchema);
export default AuthorModel;
