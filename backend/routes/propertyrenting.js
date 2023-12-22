const express=require('express');
const { viewProperty, addProperty, allProperty, deleteProperty } = require('../controllers/propertyController');
const multer=require('multer');
const { isAuth } = require('../middlewares/authmiddlware');
const router=express.Router();

const storage=multer.memoryStorage();
const upload=multer({storage:storage});


router.route('/').get(allProperty)
router.route('/viewProperty').get(viewProperty);
router.route('/addproperty').post(isAuth,addProperty);
router.route('/deleteproperty/:id').delete(isAuth,deleteProperty);
module.exports=router;