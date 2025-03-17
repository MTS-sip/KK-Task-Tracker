import { Router } from "express";
import authRoutes from "./auth-routes.js";
import routes from './api/index.js';
import authenticateToken from "../middleware/auth.js";
const router = Router();
// Authentication routes (Login)
router.use("/auth", authRoutes);
router.use("/api", authenticateToken, routes);
export default router;
