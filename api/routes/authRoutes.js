import express from "express";
import { login, register, logout } from "../controllers/authControllers.js";
import { signupValidation,loginValidation } from "../validation.js"
const router = express.Router();

router.post("/login", loginValidation,login);
router.post("/register",signupValidation, register);
router.post("/logout",logout);

export default router;