// 1. Import Express
import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import bodyParser from 'body-parser';

// 2. Create Server
const server = express();

// to parse the req.body(json)
server.use(bodyParser.json())

// for all requests related to product, redirect to product routes
server.use('/api/products', productRouter);

// 3. Default Requiest Handler
server.get("/", (req,res)=>{
    res.send("Welcome to E-Commerce API")
})

// 4. Specify port
server.listen(3100, ()=>{
    console.log("Server is running on port 3100")
})