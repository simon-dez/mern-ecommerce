import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';
import { authenticateToken } from '../middleware/authMiddleware.js'; 
import Order from '../models/Order.js';
import { verifyToken2 } from '../middleware/verifyToken.js';

const router = express.Router();


router.get('/', getOrders);



router.post('/orders', createOrder);


router.delete('/:id', async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch orders for the logged-in user by email
router.get('/account/orders', verifyToken2, async (req, res) => {
    // Debugging log
    try {
        

        const userEmail = req.user.email; // Extract email from token
        if (!userEmail) {
            console.log("No email found in token");
            return res.status(400).json({ message: 'User email is required' });
        }

        //console.log(`Fetching orders for: ${userEmail}`);

        // Ensure we are fetching from the Orders collection
        const orders = await Order.find({ email: userEmail }).sort({ createdAt: -1 });

       // console.log("Orders found:", orders);

        res.json(orders); // Return only orders, not user data
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: 'Error fetching orders' });
    }
});




export default router;