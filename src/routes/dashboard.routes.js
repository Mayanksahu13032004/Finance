// src/routes/dashboard.routes.js
import express from "express";
import { summary } from "../controllers/dashboard.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/summary", auth, summary);

export default router;