import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }
    try {
        const user = await User.findOne({ where: { username } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid username or password" });
        }
        const secret = process.env.JWT_SECRET_KEY;
        if (!secret) {
            throw new Error("JWT_SECRET_KEY is not set in environment variables");
        }
        const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: "1h" });
        return res.json({ token });
    }
    catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Login failed, please try again later" });
    }
};
const router = Router();
router.post('/login', login);
export default router;
