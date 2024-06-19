import { json } from "express";
import songModel from "../models/songModel";

const getSongById = async (req, res) => {
  const id = req.params.id;
  try {
    const song = await songModel.findById(id);
    json(song).status(200).send("Song found");
  } catch (error) {
    console.log(error);
  }
};

const getAllSongs = async (req, res) => {
  try {
    const songs = await songModel.find();
    json(songs).status(200).send("Songs found");
  } catch (error) {
    console.log(error);
  }
};

const deleteSong = async (req, res) => {
  const id = req.params.id;
  try {
    const song = await songModel.findByIdAndDelete(id);
    json(song).status(200).send("Song deleted");
  } catch (error) {
    console.log(error);
  }
};

const getSongByUser = async (req, res) => {
  const user = req.params.user;
  try {
    const song = await songModel.find({ user: user });
    json(song).status(200).send("Song found");
  } catch (error) {
    console.log(error);
  }
};

const createSong = async (req, res) => {
  try {
    const { title, userID, genre, lyrics, audioFile, coverImage, duration } = req.body;

    const newSong = new Song({
      title,
      userID,
      genre,
      lyrics,
      audioFile,
      coverImage,
      duration,
      likes: 0,
      comments: [],
    });
    const savedSong = await newSong.save();
    json(savedSong).status(200).send("Song created");
  } catch (error) {
    console.error("Error creating song:", error);
  }
};

export default { getSongById, getAllSongs, deleteSong, getSongByUser };
