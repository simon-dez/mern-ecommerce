import React,{ useEffect, useState} from 'react'
import axios from 'axios'



function ApiFetches() {

const [data, setData] = useState([]); 

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
    <div>
    <div className="flex justify-center">
        <h1 className='text-[#C5C7CA] bg-[#6C6A61]'>OUR PRODUCTS</h1>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default ApiFetches