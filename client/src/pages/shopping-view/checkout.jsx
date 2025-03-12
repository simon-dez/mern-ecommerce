import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'; 



// Load Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


function Checkout() {
  const { cart, getCartTotal } = useCart();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({ name: '', address: '', city: '', zip: '' });

  const subtotal = getCartTotal();
  const total = subtotal;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePayNow = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
        console.error("Checkout session error:", errorData.error);
        return alert(`Error: ${errorData.error}`);
    }
    


      const session = await response.json();

      const stripe = await stripePromise;
      console.log('Stripe object:', stripe); 
      if (!stripe) {
        console.error("Stripe failed to load");
        return;
      }

      // Redirect to Stripe Checkout page
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
      if (error) {
        console.error("Stripe Checkout error", error);
      }
    } catch (error) {
      console.error("Error creating checkout session", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shipping Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleInputChange}
                placeholder="City"
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                name="zip"
                value={shippingInfo.zip}
                onChange={handleInputChange}
                placeholder="Postal Code"
                className="border p-2 w-full rounded"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              {cart.map((item, index) => (
                <div key={`${item._id}-${index}`} className="flex justify-between">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>€{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
              <span>Total (VAT included):</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <button
              onClick={handlePayNow}
              className="w-full mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
