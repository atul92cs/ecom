let {createProduct,updateProduct,deleteProduct,getProduct,getProductCount}=require('../controllers');
let express=require('express');
let router=express.Router();
let parser=require('../helpers/file-uploader');
let {createProductBulk}=require('../bulkops/product');
router.post('/add',(req,res)=>{
    createProduct(req,res);
});
router.post('/bulk',parser.single('files'),(req,res)=>{
    createProductBulk(req,res);
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
router.get('/count',(req,res)=>{
    getProductCount(req,res);
});

module.exports=router;