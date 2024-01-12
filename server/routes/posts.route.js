import express from "express";
import {
  postController,
  createPostController,
} from "../controllers/post.controller.js";
const router = express.Router();

router.get("/", postController);
router.post("/", createPostController);

export default router;
