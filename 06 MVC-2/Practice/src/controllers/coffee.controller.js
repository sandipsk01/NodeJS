import {coffeeModel} from "../models/coffee.model.js";

export const coffeeController= async (req, res)=>{
    let data = await coffeeModel();
    res.render('coffees',{coffees:data})
}

export const coffeeForm = (req, res) =>{
    return res.render('form')
}

export const addCoffee = async (req, res)=>{
    let data = await coffeeModel();
    data.push(req.body)
    res.render('coffees',{coffees:data})
}