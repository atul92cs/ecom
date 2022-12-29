let {createCategory,updateCategory,deleteCategory,getCategory}=require('../controllers');
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
module.exports=router;