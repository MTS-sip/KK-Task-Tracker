import jwt from 'jsonwebtoken';
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "Access denied, no token provided" });
        return;
    }
    try {
        const secret = process.env.JWT_SECRET_KEY;
        if (!secret) {
            throw new Error("JWT_SECRET_KEY is not set in environment variables");
        }
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(403).json({ message: "Invalid or expired token" });
    }
};
export default authenticateToken;
