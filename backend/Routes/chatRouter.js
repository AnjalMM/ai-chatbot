import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { createChat } from "../controllers/chatController.js";

const router = express.Router()

router.post("/new",isAuth,createChat)

export default router;