import express from "express";
import { getProfile, loginUser, signupUser, upload, uploadPic, verifyUser } from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/login",loginUser);
router.post("/signup",signupUser)
router.post("/verify",verifyUser);
router.get("/me",isAuth,getProfile);
router.post("/uploadprofile",isAuth,upload.single("profilePicture"),uploadPic)

export default router;