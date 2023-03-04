let {createCategory,updateCategory,deleteCategory,getCategory,getCategoryCount}=require('../controllers');
let {createCategoryBulk}=require('../bulkops/category');
let parser=require('../helpers/file-uploader');
let express=require('express');
let router=express.Router();

router.post('/add',(req,res)=>{
    createCategory(req,res);
});

router.post('/bulk',parser.single('files'),(req,res)=>{
    createCategoryBulk(req,res);
});
router.put('/:id',(req,res)=>{
    updateCategory(req,res);
});

router.delete('/:id',(req,res)=>{
    deleteCategory(req,res);
});

router.get('/',(req,res)=>{
    getCategory(req,res);
});
router.get('/count',(req,res)=>{
    getCategoryCount(req,res);
});
module.exports=router;