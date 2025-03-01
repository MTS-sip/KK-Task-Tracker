import { Router } from "express";
import authRoutes from "./auth-routes.js";
import authenticateToken from "../middleware/auth.js";

const router = Router();

// Authentication routes (Login)
router.use("/auth", authRoutes);

// Protected API routes
router.use("/tickets", authenticateToken, (req, res) => {
    res.json({ message: "Protected ticket data" });
});

export default router;


