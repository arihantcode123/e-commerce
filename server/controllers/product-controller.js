const Product = require('../models/product-model')

const productController=async(req,res)=>{
    try {
        const response = await Product.find();
        if(!response){
            res.status(404).json({msg:"No Products found"})
            return ;
        }
        res.status(200).json(response);
        console.log(response);


    } catch (error) {
        console.log(error); 
    }
}

const specificProductController=async(req,res)=>{
    try {
        const response = await Product.findById(req.params.id);
        if(!response){
            res.status(404).json({msg:"this Product is not found"})
            return ;
        }
        res.status(200).json(response);
        console.log(response);


    } catch (error) {
        console.log(error); 
    }
}

module.exports={productController,specificProductController};