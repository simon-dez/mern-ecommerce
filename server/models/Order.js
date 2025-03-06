import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: { type: Number, required: true, unique: true },
    customerName: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
