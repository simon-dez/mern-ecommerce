import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import ProductCard from '../../components/shopping-view/ProductCard';

function TestComp() {
    const [products, setProducts] = useState([]);
    const {category} = useParams();

    
    useEffect(() => {    
        axios(`http://localhost:5000/api/products/category/${category}‍`)
            .then(res => {setProducts(res.data); console.log(products)})
            .catch(err=> console.error('Error:', err))
    }, [category]);
  
  
  return (
    <div className="container mx-auto px-4 py-8 mt-8 relative z-0">
      {/* <ProductSort
        sortOption={sortOption}
        onSortChange={handleSort}
      /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(((product, id)=> <ProductCard key={id}  product={product}>{console.log(product)}</ProductCard>))}
      </div>
    </div>
  );
}

export default TestComp