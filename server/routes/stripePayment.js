import express from 'express';
import Stripe from 'stripe';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);




router.post('/create-checkout-session', async (req, res) => {
    const { cart } = req.body; // Assuming you're passing the cart data to the backend
  console.log("Cart received in backend:",cart);

    const line_items = cart.map(item => ({
      price_data: {
        currency: 'eur',  // Specify the currency (e.g., EUR)
        product_data: {
          name: item.product,
        },
        unit_amount: item.price * 100,  // Stripe requires the amount in the smallest currency unit
      },
      quantity: item.quantity,
    }));
  
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
      });
  
      res.json({ id: session.id });
    } catch (err) {
        console.error("Error creating checkout session:", err.message);
        res.status(500).json({ error: err.message });
    }
  });
  
  export default router;