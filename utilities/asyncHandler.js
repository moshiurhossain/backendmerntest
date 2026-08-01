const asyncHandler =(callbackfn)=>{
    return  (req,res,next)=>{
        try{
             callbackfn(req,res,next)
        }catch(err){
            next(err)
        }
    }
}

module.exports = { asyncHandler }