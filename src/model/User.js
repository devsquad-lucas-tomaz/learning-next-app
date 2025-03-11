import mongoose from "mongoose";

const User = mongoose.Schema(
  { email: String, name: String, phone: String },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", User);