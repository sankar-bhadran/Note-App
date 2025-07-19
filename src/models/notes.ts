import mongoose, { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface INote extends Document {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<INote>(
  {
    id: {
      type: String,
      default: uuidv4, // generates a UUID automatically
      unique: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // auto-generates createdAt and updatedAt
  }
);

export default mongoose.model<INote>("Note", noteSchema);
