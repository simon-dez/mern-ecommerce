import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/category/:cat',async (req, res) =>  {
  try {
    const category = decodeURIComponent(req.params.cat).replace(/\u200D/g, "");
    //console.log(req.url, '---', category)

   const productList = await Product.find({category: category})
    res.json(productList);
    
  } catch (error) {
   console.error('Error:', error); 
  }
});

router.get('/:id', async(req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if(product){
      res.json(product)
    }else{
      res.status(204).json({msg: 'there is no such product'})
    }
    
  } catch (error) {
    console.error('Error:', error)
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;