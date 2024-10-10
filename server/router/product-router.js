const express = require('express');
const product = require('../controllers/product-controller');
const router=express.Router();

router.route('/products').get(product.productController);
router.route('/products/:id').get(product.specificProductController);

module.exports=router;