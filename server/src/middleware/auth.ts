
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
    user?: any;
}

// assures authenticateToken declared first, then exported
const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        res.status(401).json({ message: "Access denied, no token provided" });
        return;
    }

    try {
        const secret = process.env.JWT_SECRET_KEY;
        if (!secret) {
            throw new Error("JWT_SECRET_KEY is not defined in environment variables");
        }

        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
};

export default authenticateToken; 

