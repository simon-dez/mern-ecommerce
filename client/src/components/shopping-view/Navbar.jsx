import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-800 shadow-sm">
      <div className="flex space-x-8">
        <Link to="/" className="text-white font-semibold">Home</Link>
        <Link to="/products" className="text-white font-semibold">Products</Link>
      </div>
      <div className="relative">
        <Link to="/cart" className="text-white font-semibold">
          Cart
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
