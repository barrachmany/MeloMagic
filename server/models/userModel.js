import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  profilePicture: {
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
