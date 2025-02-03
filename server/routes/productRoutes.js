import express from 'express';
import { createProduct, getProducts } from '../controllers/productController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, createProduct);
router.get('/', getProducts);

export default router;