import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-800 shadow-sm">
      <div className="flex space-x-8">
        <Link to="/" className="text-white font-semibold">Home</Link>
        <Link to="/products" className="text-white font-semibold">Products</Link>
        

      </div>
    </nav>
  );
}

export default Navbar;
