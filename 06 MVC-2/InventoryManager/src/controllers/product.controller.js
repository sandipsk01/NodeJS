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
        return res.render('new-product', {errorMessage:null})
    }

    // Post data and calling static add method of model class and display product view
    addNewProduct(req, res, next){
        console.log(req.body);

        // validate data
        const {name, price, imageUrl}=req.body;
        let errors=[];
        if(!name || name.trim()==''){
            errors.push("Name is required.");
        }
        if(!price || parseFloat(price)<1){
            errors.push("Price must be Positive value.");
        }
        try{
            const validUrl = new URL(imageUrl);
        } catch (err) {
            errors.push('Url is invalid.')
        }

        if(errors.length>0){
            return res.render('new-product',{
                errorMessage: errors[0]
            })
        }
        
        ProductModel.add(req.body);
        let products = ProductModel.get();
        // res.render("view",data)
        res.render("products", {products:products})
    }
}