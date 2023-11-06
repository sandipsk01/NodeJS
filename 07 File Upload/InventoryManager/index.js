import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import ProductController from './src/controllers/product.controller.js';
import { validationMiddleware } from './src/middlewares/validation.middleware.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';
const server = express();

// parse form data
server.use(express.urlencoded({extended:true}));

// setup view engine settings
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(), "src", "views"));

server.use(ejsLayouts);

server.use(express.static('public'))
// create an instance of ProductController
const productController = new ProductController();

// routes and controller.methods
server.get('/', productController.getProducts);
server.get('/new', productController.getAddForm);
server.get('/update-product/:id', productController.getUpdateProductView);

server.post('/delete-product/:id', productController.deleteProduct);
server.post('/', uploadFile.single('imageUrl'), validationMiddleware, productController.addNewProduct);
server.post('/update-product', productController.postUpdateProduct);

server.use(express.static('src/views'));

server.listen(3100, ()=>{
    console.log('Server is listening on port 3100');
});