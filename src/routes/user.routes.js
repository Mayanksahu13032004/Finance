import express from "express";
import {
  getUsers,
  updateUserRole,
  updateUserStatus
} from "../controllers/user.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { allow } from "../middleware/role.middleware.js";

const router = express.Router();

// Admin only routes
router.get("/", auth, allow("admin"), getUsers);

router.patch("/role/:id", auth, allow("admin"), updateUserRole);

router.patch("/status/:id", auth, allow("admin"), updateUserStatus);

export default router;