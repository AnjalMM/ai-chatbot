import express from "express";
import { loginUser, myProfile, signupUser, verifyUser } from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/login",loginUser);
router.post("/signup",signupUser)
router.post("/verify",verifyUser);
router.get("/me",isAuth,myProfile)

export default router;