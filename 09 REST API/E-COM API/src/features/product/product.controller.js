import ProductModel from "./product.model.js";

export default class ProductController{
    getAllProducts(req, res){
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        console.log(req.body);
        const {name, price, sizes}= req.body;
        const newProduct = {
            name,
            price: parseFloat(price),
            sizes: sizes.split(','),    // split function will give an array
            imageUrl: req.file.filename
        }
        const createdRecord = ProductModel.add(newProduct);
        res.status(201).send(createdRecord)
    }

    rateProduct(req, res){

    }

    getOneProduct(req, res){
        
    }
}