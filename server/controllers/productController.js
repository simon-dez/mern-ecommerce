import Product from "../models/Product.js";



export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("Fetched products from database:", products); 
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error); 
    res.status(500).json({ error: error.message });
  }
};

// create new product(admin only)

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const product = new Product({ name, description, price, stock });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
