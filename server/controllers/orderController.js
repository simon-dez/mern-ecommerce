  import Order from "../models/Order.js";
  import { v4 as uuidv4 } from "uuid";

export const createOrder = async (req, res) => {
  try {
    

    const { customerName, email, items, totalAmount, shippingInfo } = req.body;

    if (!customerName || !email || !items || !totalAmount || !shippingInfo) {
      return res.status(400).json({ message: "Missing required order fields" });
    }

    const newOrder = new Order({
      orderId: uuidv4(), // ✅ Generate a unique orderId
      customerName,
      email,
      items,
      totalAmount,
      shippingAddress: shippingInfo,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order created successfully", order: newOrder});
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};