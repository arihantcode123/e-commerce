const validate=(schema)=>async(req,res,next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        const status=422;
        const message="Fill input properly";
        const extraDetails=err.errors[0].message;

        const errorObject={
            status,
            message,
            extraDetails
        }

        next(errorObject)
    }
}

module.exports=validate;