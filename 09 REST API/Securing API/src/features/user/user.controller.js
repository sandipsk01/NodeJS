import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
export default class UserController{
    signUp(req, res){
        const {name, email, password, type} = req.body;
        const user=UserModel.SignUp(name, email, password, type);
        res.status(201).send(user);
    }

    signIn(req, res){
        const result=UserModel.SignIn(req.body.email, req.body.password);
        if(!result){
            return res.status(400).send("Incorrect Credentials");
        }else{
            // 1. Create Token jwt.sign(payload, secretKey, {options( should have expiresIn like 1d 1h 60)})
            const token = jwt.sign({userid:result.id, email:result.email},"1ga8lpgPAsKpIwUtm8fculAgkNuHsz2S",{expiresIn:'1h'});
            return res.status(200).send(token);
        }
    }
}