import express from "express";
import authMiddleware from "../middleware/auth.js";
import { getMemberInfo } from "../controllers/memberController.js";

const router = express.Router();

router.get("/info", authMiddleware, getMemberInfo);

export default router;
