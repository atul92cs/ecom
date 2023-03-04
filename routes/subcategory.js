let {createSubcategory,getSubcategory,updateSubcategory,deleteSubcategory,getSubCategoryCount}=require('../controllers');
let express=require('express');
let router=express.Router();
let parser=require('../helpers/file-uploader');
let {createSubcategoryBulk}=require('../bulkops/subcategory');
router.post('/add',(req,res)=>{
    createSubcategory(req,res);
});
router.post('/bulk',parser.single('files'),(req,res)=>{
    createSubcategoryBulk(req,res);
});
router.get('/',(req,res)=>{
    getSubcategory(req,res);
});
router.put('/:id',(req,res)=>{
    updateSubcategory(req,res);
});
router.delete('/:id',(req,res)=>{
    deleteSubcategory(req,res);
});
router.get('/count',(req,res)=>{
    getSubCategoryCount(req,res);
});
module.exports=router;