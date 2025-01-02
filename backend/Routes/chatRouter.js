import express from "express";
import { isAuth } from "../middleware/isAuth.js";
import { createChat, getAllChats } from "../controllers/chatController.js";

const router = express.Router()

router.post("/new",isAuth,createChat)
router.get("/all",isAuth,getAllChats)

export default router;