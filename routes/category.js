let {createCategory,updateCategory,deleteCategory,getCategory,getCategoryCount}=require('../controllers');
let express=require('express');
let router=express.Router();

router.post('/add',(req,res)=>{
    createCategory(req,res);
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