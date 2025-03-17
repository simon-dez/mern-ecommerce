import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/category/:cat", async (req, res) => {
  try {
    const category = decodeURIComponent(req.params.cat).replace(/\u200D/g, "");
    const productList = await Product.find({ category: category });
    res.json(productList);
  } catch (error) {
    console.error("Error:", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(204).json({ msg: "there is no such product" });
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); 
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post("/get-product-details", async (req, res) => {
  const { cart } = req.body;

  try {
    const productIds = cart.map((item) => item._id);
    const products = await Product.find({ _id: { $in: productIds } });
    const productDetails = cart.map((item) => {
      const product = products.find((p) => p._id.toString() === item._id);
      return {
        ...item,
        image: product.image,
        description: product.description,
        price: product.price,
      };
    });

    res.json(productDetails);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ error: "Unable to fetch product details." });
  }
});

// Add a new product
router.post('/', async (req, res) => {
  const { product, price, description, image, category, sizes } = req.body;
  try {
      const newProduct = new Product({ product, price, description, image, category, sizes });
      await newProduct.save();
      res.status(201).json(newProduct);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
      const product = await Product.findById(req.params.id);
      if (!product) {
          return res.status(404).json({ error: 'Product not found' });
      }
      await product.remove();
      res.json({ message: 'Product removed' });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

export default router;
