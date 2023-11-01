import { body, validationResult } from "express-validator";

export const validationMiddleware = async (req, res, next) => {
    // validate data
    // const {name, price, imageUrl}=req.body;
    // let errors=[];
    // if(!name || name.trim()==''){
    //     errors.push("Name is required.");
    // }
    // if(!price || parseFloat(price)<1){
    //     errors.push("Price must be Positive value.");
    // }
    // try{
    //     const validUrl = new URL(imageUrl);
    // } catch (err) {
    //     errors.push('Url is invalid.')
    // }

    //using express-validator

    //1.setup rules for validation
    const rules = [
        body('name').notEmpty().withMessage("Name is required."),
        body('price').isFloat({gt:0}).withMessage("Price should be +ve value."),
        body('imageUrl').isURL().withMessage("Invalid URL.")
    ]

    //2.run those rules- can be async, i/o operations so we put them using promises
    await Promise.all(
        rules.map((rule)=>rule.run(req))
    );

    //3.to get/extract errors use validationResult()
    var validationErrors = validationResult(req);
    console.log(validationErrors);
    if(!validationErrors.isEmpty()){
        return res.render('new-product',{
            errorMessage: validationErrors.array()[0].msg
        })
    }
    next()
}