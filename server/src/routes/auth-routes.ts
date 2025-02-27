import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Username or password incorrect, please try again' });
    }

    const secret = process.env.JWT_SECRET_KEY || 'secretwhy88key';
    const token = jwt.sign({ username: user.username, id: user.id }, secret, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed, please try again later' });
  }
};

const router = Router();
router.post('/login', login);
export default router;


