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
        // multer step 5
        const {name, desc, price}=req.body;
        const imageUrl = "images/"+req.file.filename
        ProductModel.add(name, desc, price, imageUrl);
        let products = ProductModel.get();
        // res.render("view",data)
        res.render("products", {products:products})
    }

    // Update product View
    getUpdateProductView(req, res, next){
        const id =req.params.id;
        const productFound=ProductModel.getById(id);
        // 1.If product exists then return view
        if(productFound){
            res.render('update-product',{product:productFound, errorMessage:null});
        }

        // 2.else return errors
        else{
            res.status(401).send("Product not found.")
        }
    }

    // Post updated data
    postUpdateProduct(req, res){
        ProductModel.update(req.body);
        var products = ProductModel.get();
        res.render('products', {products})
    }

    // Delete Peoduct
    deleteProduct(req, res){
        const id = req.params.id;
        const productFound=ProductModel.getById(id);
        // 1.If product exists then return view
        if(!productFound){
            return res.status(401).send("Product not found.");
        }
        ProductModel.delete(id);
        var products = ProductModel.get();
        res.render('products', {products});
    }
}