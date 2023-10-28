import express from 'express';
import path from 'path';
import ProductController from './src/controllers/product.controller.js';

const server = express();

// setup view engine settings
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(), "src", "views"));

// create an instance of ProductController
const productController = new ProductController();

server.get('/', productController.getProducts)

server.use(express.static('src/views'));

server.listen(3100, ()=>{
    console.log('Server is listening on port 3100');
});