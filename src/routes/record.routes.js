// src/routes/record.routes.js
import express from "express";
import { getRecords, createRecord } from "../controllers/record.controller.js";
import { auth } from "../middleware/auth.middleware.js";
import { allow } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", auth, allow("analyst", "admin"), getRecords);
router.post("/", auth, allow("admin"), createRecord);

export default router;