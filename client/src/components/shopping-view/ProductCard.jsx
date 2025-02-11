import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product._id}`} className="group block overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <div className="mt-2 text-center">
        <h2 className="text-lg font-medium text-gray-900">{product.name}</h2>
      </div>
    </Link>
  );
}

export default ProductCard;


