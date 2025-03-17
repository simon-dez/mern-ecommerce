  import Order from "../models/Order.js";
  import { v4 as uuidv4 } from "uuid";
  import { sendOrderConfirmation } from "../mailtrap/emails.js";

export const createOrder = async (req, res) => {
  try {
    //console.log("Received order data:", req.body); 

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

    await sendOrderConfirmation(email, items,totalAmount);
    console.log("Order created successfully:", sendOrderConfirmation);
    res.status(201).json({ message: "Order created successfully", order: newOrder});
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

