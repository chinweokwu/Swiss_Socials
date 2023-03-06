import express from "express";
const router = express.Router();
import {getLikes, addLike, removeLike} from "../controllers/likeControllers.js";

router.get("/",getLikes);
router.post("/",addLike);
router.delete("/",removeLike);
export default router;