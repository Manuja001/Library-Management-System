import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    max: 5,
    min: 0,
  },
  publishedDate: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Book", BookSchema);
