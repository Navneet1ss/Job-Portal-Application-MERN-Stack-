import express from "express";
import { login, register, logout, getUser, getAllUsers } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);

// New route to get all users
router.get("/getallusers", isAuthenticated, getAllUsers);

export default router;
