import express from "express";
const router = express.Router();
import { getStories, createStory, deleteStory } from "../controllers/storyControllers.js";
router.get("/", getStories);
router.post("/", createStory);
router.delete("/:id", deleteStory);

export default router;