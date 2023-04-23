import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema(
  {
    username: String,
    rating: Number,
    beerid: Number,
    body: String,
    byExpert: Boolean
  },
  { collection: "reviews" }
);

export default reviewsSchema;
