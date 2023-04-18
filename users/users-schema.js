import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: String,
    email: { type: String },
    phone: { type: String, default: "123-234-3456" },
    createdOn: { type: Date, default: Date.now },
    isExpert: { type: Boolean, default: false },
  },
  { collection: "users" }
);

export default usersSchema;
