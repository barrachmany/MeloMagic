import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  profilePhoto: {
    type: String,
    default: "",
    required: false,
  },
  favorits: {
    type: Array,
    required: false,
    default: [],
  },
});

export default mongoose.model("User", userSchema);
