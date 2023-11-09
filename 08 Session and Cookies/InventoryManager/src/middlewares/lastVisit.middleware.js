export const setLastVisit = (req, res, next)=>{
    //1. if cookie is set, then add local variable with last visit time data.
    // set cookie in res Object and receive in req object
    if(req.cookies.lastVisit){
        res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
    }
    res.cookie('lastVisit', new Date().toISOString(), {maxAge: 2*24*60*60*1000});
    next();
}