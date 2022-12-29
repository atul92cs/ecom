let {createProduct,updateProduct,deleteProduct,getProduct}=require('../controllers');
let express=require('express');
let router=express.Router();
router.post('/add',(req,res)=>{
    createProduct(req,res);
});
router.put('/:id',(req,res)=>{
    updateProduct(req,res);
});
router.delete('/:id',(req,res)=>{
    deleteProduct(req,res);
});
router.get('/',(req,res)=>{
    getProduct(req,res);
});

module.exports=router;