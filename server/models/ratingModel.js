import mongoose from "mongoose";

const ratingSchema = mongoose.Schema({
  songID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
