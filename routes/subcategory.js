let {createSubcategory,getSubcategory,updateSubcategory,deleteSubcategory}=require('../controllers');
let express=require('express');
let router=express.Router();

router.post('/add',(req,res)=>{
    createSubcategory(req,res);
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
module.exports=router;