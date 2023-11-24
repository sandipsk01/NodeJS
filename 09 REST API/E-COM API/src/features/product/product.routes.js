// 1. Import express
import express from 'express';
import ProductController from './product.controller.js';
import {upload} from '../../middlewares/fileupload.middleware.js';

// 2. Initialize express router
const productRouter = express.Router();

const productController = new ProductController();

// All the paths to controller methods

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', upload.single('imageUrl'), productController.addProduct);

// http://localhost:3100/api/products/filter?minPrice=10&maxPrice=30     --query params
productRouter.get('/filter',productController.filterProducts);

productRouter.get('/:id', productController.getOneProduct);

export default productRouter;