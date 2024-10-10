const express=require('express');
const router=express.Router()
const userController=require('../controllers/user-controller')
const validate = require('../middlewares/validate-middleware')
const authMiddleware=require('../middlewares/auth-middleware')
const schemaMiddleware = require('../validations/user-validation')

router.route('/register').post(validate(schemaMiddleware.signupSchema),userController.register);
router.route('/login').post(validate(schemaMiddleware.loginSchema),userController.login);
router.route('/user').get(authMiddleware,userController.user);

module.exports=router;