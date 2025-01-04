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
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error('JWT_SECRET is not configured');
      return res.status(500).json({
        message: 'Internal server error'
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username
      },
      jwtSecret,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    const { password: _, ...userWithoutPassword } = user.toJSON();
    
    res.json({
      message: 'Login successful',
      token,
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};



const router = Router();

// POST /login - Login a user

router.post('/login', login);


export default router;
