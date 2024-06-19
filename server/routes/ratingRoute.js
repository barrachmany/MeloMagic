import Router from "express";
import RatingController from "../controllers/ratingController.js";

const router = new Router();

router.get("/ratings", RatingController.getAllRatings);
router.get("/ratings/:id", RatingController.getRatingById);
router.delete("/ratings/:id", RatingController.deleteRating);
router.post("/ratings", RatingController.createRating);
router.put("/ratings/:id", RatingController.updateRating);
router.get("/rating/:songId", RatingController.getRatingBySong);
