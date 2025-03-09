
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  console.log('product in product-Card', product)
  return (
    <Link to={`/product/${product._id}`} className="group block overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.image}
          className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <div className="mt-2 text-center">
        <h2 className="text-lg font-medium text-gray-900">{product.product}</h2>
      </div>
    </Link>
  );
}

export default ProductCard;


