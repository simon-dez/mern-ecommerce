/*import express from 'express';
//import { createOrder, getOrders } from '../controllers/orderController.js';
import Order from '../models/Order.js';


const router = express.Router();





// Get all orders
router.get('/',   async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new order
router.post('/',  async (req, res) => {
    const { orderId, customerName, totalAmount, status } = req.body;
    try {
        const newOrder = new Order({ orderId, customerName, totalAmount, status });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete an order
router.delete('/:id', async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//router.post('/', authenticateToken, createOrder);
//router.get('/', authenticateToken, getOrders);


export default router;
*/

import express from 'express';
import { createOrder } from '../controllers/orderController.js';

const router = express.Router();

// Create an order
router.post('/orders', createOrder);



export default router;