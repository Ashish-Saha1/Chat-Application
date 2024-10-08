const createError = require('http-errors')

function notFoundHandlar(req,res,next){ 
    next(createError(404, 'Your requested page was not found.'))
}


function errorHandlar(err,req,res,next){
    res.locals.error =  process.env.NODE_ENV=== "development"? err : err.message;
    res.status(err.status || 500)

    
    if(res.headersSent){
        next("There was a problem as hopefully Headers already sent")
    }
    
    else{
        if(res.locals.html){
            //HTML Response          
            res.render("error", {title:"Error Page"})     
        }else{
            //JSON Response
            res.json(res.locals.error)
        }
    }

}


module.exports = {
    notFoundHandlar,
    errorHandlar
}