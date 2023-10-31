import express from 'express';
import { coffeeController } from './src/controllers/coffee.controller.js';
const server = express();

server.set('view engine','ejs');
server.set('views','src/views');

server.get('/',coffeeController)

server.listen(3100, ()=>{
    console.log('Server is running on port 3100.')
})