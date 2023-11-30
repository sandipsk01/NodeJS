import UserModel from "../features/user/user.model.js";

const basicAuthorizer = (req, res, next)=>{

    // 1. Check if authorization header is empty
    // http headers can be access using req Object
    const authHeader = req.headers["authorization"];

    if(!authHeader){
        return res.status(401).send("No authorization details found.")
    }

    // 2.Extract credentials. [Basic aadsfsfsffdgettretc]
    // credential which we send from client and receive in server are encoded in base64 encoding technique.
    const base64Credentials = authHeader.replace('Basic ','');

    // 3. Decode the credentials [username:password]
    const decodedCreds = Buffer.from(base64Credentials, 'base64').toString('utf8');

    const creds = decodedCreds.split(':');

    const user = UserModel.getAll().find((u)=>u.email=creds[0] && u.password==creds[1]);
    
    if(user){
        next();
    } else {
        return res.status(401).send("Incorrect Credentials.")
    }
}

export default basicAuthorizer;