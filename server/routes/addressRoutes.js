import express from 'express';
import Order from '../models/Order.js'; // Update with your Order model path
import {verifyToken2}  from  "../middleware/verifyToken.js" // Import your authentication middleware

const router = express.Router();

// Route to get the shipping address of the authenticated user
router.get('/account/addresses', verifyToken2, async (req, res) => {
  try {
    const userId = req.user._id; // Extract user ID from the decoded JWT payload

    // Query orders for the user and extract only the shipping address
    const orders = await Order.find({ customerId: userId }); // Assuming `customerId` is the field linking orders to users

    if (orders.length === 0) {
      return res.status(404).json({ message: 'No orders found for this user' });
    }

    // Map orders to get an array of shipping addresses
    const shippingAddresses = orders.map(order => order.shippingAddress);

    res.json(shippingAddresses); // Send the shipping addresses in response
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch shipping addresses' });
  }
});

export default router;
