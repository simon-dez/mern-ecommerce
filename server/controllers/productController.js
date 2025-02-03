
import Product from '../models/Product.js';

// GET all products

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Create new product(admin only)

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
