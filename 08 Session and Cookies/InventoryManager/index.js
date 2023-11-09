import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import ProductController from './src/controllers/product.controller.js';
import { validationMiddleware } from './src/middlewares/validation.middleware.js';
import { uploadFile } from './src/middlewares/file-upload.middleware.js';
import UserController from './src/controllers/user.controller.js';
import { auth } from './src/middlewares/auth.middleware.js';
import { setLastVisit } from './src/middlewares/lastVisit.middleware.js';
const server = express();

// parse form data
server.use(express.urlencoded({extended:true}));

// setup view engine settings
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(), "src", "views"));

// ejsLayouts middleware globally
server.use(ejsLayouts);

// to make public folder available everywhere
server.use(express.static('public'));

// to parse data from req to res
server.use(cookieParser());

// configuration of session
server.use(session({
    secret:'SecretKey',   //use key geenerators in real application
    resave:false,
    saveUninitialized:true,
    cookie: {secure: false},  // to send cookies over unsecured protocol
}))

// create an instance of Controllers
const productController = new ProductController();
const userController = new UserController();

// routes and controller.methods
server.get('/', setLastVisit, auth, productController.getProducts);
server.get('/new', auth, productController.getAddForm);
server.get('/update-product/:id', auth, productController.getUpdateProductView);
server.get('/register', userController.getRegister);
server.get('/login', userController.getLogin);
server.get('/logout', userController.logout);

server.post('/delete-product/:id', auth, productController.deleteProduct);
server.post('/', uploadFile.single('imageUrl'), auth, validationMiddleware, productController.addNewProduct);
server.post('/update-product', auth, productController.postUpdateProduct);
server.post('/register', userController.postRegister);
server.post('/login', userController.postLogin);

server.use(express.static('src/views'));

server.listen(3100, ()=>{
    console.log('Server is listening on port 3100');
});