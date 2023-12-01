import jwt from "jsonwebtoken"
const jwtAuth = (req, res, next) =>{
    // 1.Read the token : token must sent by under authorization header
    const token = req.headers['authorization'];

    // 2.If no token, then return the error
    if(!token){
        return res.status(401).send("Unauthorized aceess error.");
    };

    // 3.Check if token is valid   jwt.verify(token,secretKey)
    try{
        const payload = jwt.verify(token, "1ga8lpgPAsKpIwUtm8fculAgkNuHsz2S");
        console.log(payload);
    }catch (err) {
        // 4.Return Error
        return res.status(401).send("Unauthorized");
    }   

    // 5.Call next middleware
    next();
}

export default jwtAuth;