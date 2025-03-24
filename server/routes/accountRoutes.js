import express from 'express';
import User from '../models/User.js';
import Order from '../models/Order.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// Get user account details and orders
router.get('/account', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    if (!user) return res.status(404).json({ message: 'User not found' });

    const orders = await Order.find({ userId: req.user.id });

    res.json({ user, orders });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
