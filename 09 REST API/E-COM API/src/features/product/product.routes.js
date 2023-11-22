// 1. Import express
import express from 'express';
import ProductController from './product.controller.js';

// 2. Initialize express router
const router = express.Router();

const productController = new ProductController();

// All the paths to controller methods
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);

export default router;