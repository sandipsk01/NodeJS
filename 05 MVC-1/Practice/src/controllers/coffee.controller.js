import {coffeeModel} from "../models/coffee.model.js";

export const coffeeController= async (req, res)=>{
    let data = await coffeeModel();
    res.render('coffees',{coffees:data})
}