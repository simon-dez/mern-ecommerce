import { v4 as uuidv4 } from "uuid"; // Import UUID generator
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: { type: String, unique: true, default: uuidv4 }, 
  customerName: { type: String,  },
  email: { type: String,  },
  items: [
    {
      name: { type: String,  },
      quantity: { type: Number,  },
      price: { type: Number,  },
    },
  ],
  totalAmount: { type: Number,  },
  //paymentStatus: { type: String,
   //  default: 'Pending',
    // },
  shippingAddress: {
    address: { type: String, },
    city: { type: String, },
    state: { type: String, },
    postalCode: { type: String,  },
    country: { type: String,  },
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;