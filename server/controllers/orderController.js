
import Order from '../models/Order.js';

// Create new order
export const createOrder = async (req, res) => {
 try{
    const {products, totalAmount} = req.body;
    const order = new Order({userid: req.user._id, products, totalAmount});
    await order.save();
    res.status(201).json(order);
 } catch (error) {
    res.status(500).json({error: error.message});
 }
 };


// Get all orders

export const getOrders = async (req, res) => {
    try{
        const orders = await Order.find({userId:req.user.userId}).populate('products');
        res.status(200).json(orders);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};