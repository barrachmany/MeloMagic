import mongoose from "mongoose";

const songSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  ganre: {
    type: String,
    required: true,
  },
  lyrics: {
    type: String,
  },
  audioFile: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    default: "",
  },
  duration: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  comments: {
    type: Array,
    default: [],
  },
});

export default mongoose.model("Song", songSchema);
