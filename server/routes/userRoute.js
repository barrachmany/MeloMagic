import userController from "../controllers/userController.js";
import Router from "express";

const router = new Router();

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.delete("/users/:id", userController.deleteUser);
//router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.post("/users/login", userController.loginUser);
router.post("/users/logout", userController.logoutUser);
router.post("/users/register", userController.registerUser);

export default router;
