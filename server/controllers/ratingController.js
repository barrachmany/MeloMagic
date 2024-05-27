import { json } from "express";
import ratingModel from "../models/ratingModel.js";

const getAllRatings = async (req, res) => {
  try {
    const ratings = await ratingModel.find();
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRatingById = async (req, res) => {
  const id = req.params.id;
  try {
    const rating = await ratingModel.findById(id);
    res.json(rating).status(200).send("Rating found");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteRating = async (req, res) => {
  const id = req.params.id;
  try {
    const rating = await ratingModel.findByIdAndDelete(id);
    res.json(rating).status(200).send("Rating deleted");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createRating = async (req, res) => {
  try {
    const { songId, userId, rating } = req.body;
    const newRating = new ratingModel({
      songId,
      userId,
      rating,
    });
    const savedRating = await newRating.save();
    res.json(savedRating).status(200).send("Rating created");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateRating = async (req, res) => {
  const id = req.params.id;
  try {
    const rating = await ratingModel.findByIdAndUpdate(id, req.body);
    res.json(rating).status(200).send("Rating updated");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getRatingBySong = async (req, res) => {
  const songId = req.params.songId;
  try {
    const rating = await ratingModel.find({ songId: songId });
    res.json(rating).status(200).send("Rating found");
  } catch (error) {
    res.json({ message: error.message });
  }
};
