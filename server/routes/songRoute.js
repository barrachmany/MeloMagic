import Router from "express";
import SongController from "../controllers/songController.js";
import path from "path";

const router = new Router();

router.get("/songs", SongController.getAllSongs);
router.get("/songs/:id", SongController.getSongById);
router.get("/songs/user/:user", SongController.getSongByUser);
router.delete("/songs/:id", SongController.deleteSong);
router.post("/songs", SongController.createSong);
router.post("/songs/upload", SongController.uploadSong);
