import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  const total = getCartTotal();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is currently empty.</p>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {cart.map((item, index) => (
              <div key={`${item._id}-${index}`} className="border p-4 rounded shadow flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">€{item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(item._id, item.selectedSize, Math.max(1, item.quantity - 1))}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.selectedSize, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id, item.selectedSize)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="flex flex-col space-y-2 border-t pt-4">
            <div className="flex justify-between font-semibold">
              <span>Total (VAT included):</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors mt-4"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
