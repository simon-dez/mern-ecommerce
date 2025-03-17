import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';
import { authenticateToken } from '../middleware/authMiddleware.js'; 

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




export default router;