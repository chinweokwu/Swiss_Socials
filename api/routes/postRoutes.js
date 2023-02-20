import express from "express";
import { getPosts, addPost} from "../controllers/postControllers.js";
const router = express.Router();

router.get("/",getPosts);
router.post("/",addPost);

export default router;