// imports
import express from 'express';
import ejsLayouts from 'express-ejs-layouts'
import { addCoffee, coffeeController, coffeeForm } from './src/controllers/coffee.controller.js';

// server creation
const server = express();

// parse form data
server.use(express.urlencoded({extended:true}));

// ejs setups
server.set('view engine','ejs');
server.set('views','src/views');
server.use(ejsLayouts);

// routes
server.get('/',coffeeController);
server.get('/new',coffeeForm);
server.post('/',addCoffee)

// listen
server.listen(3100, ()=>{
    console.log('Server is running on port 3100.')
})