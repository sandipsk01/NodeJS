import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController{
    // Access initial data and show products view
    getProducts(req, res){
        let products = ProductModel.get();
        // res.render("view",data)
        res.render("products", {products:products})
        // return res.sendFile(path.join(path.resolve(), 'src', 'views', 'products.html'))
    }

    // Display form view
    getAddForm(req, res){
        return res.render('new-product')
    }

    // Post data and calling static add method of model class and display product view
    addNewProduct(req, res){
        console.log(req.body);
        ProductModel.add(req.body);
        let products = ProductModel.get();
        // res.render("view",data)
        res.render("products", {products:products})
    }
}