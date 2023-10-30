import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import ProductController from './src/controllers/product.controller.js';

const server = express();

// parse form data
server.use(express.urlencoded({extended:true}));

// setup view engine settings
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(), "src", "views"));

server.use(ejsLayouts);

// create an instance of ProductController
const productController = new ProductController();

// routes and controller.methods
server.get('/', productController.getProducts);
server.get('/new', productController.getAddForm);
server.post('/',productController.addNewProduct);

server.use(express.static('src/views'));

server.listen(3100, ()=>{
    console.log('Server is listening on port 3100');
});