import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        message: 'Username and password are required'
      });
    }
    // Find user in database
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }


const router = Router();

// POST /login - Login a user
router.post('/login', login);


export default router;
