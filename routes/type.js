let {createType,getType,deleteType,updateType}=require('../controllers');
let express=require('express');
let router=express.Router();

router.post('/add',(req,res)=>{
    createType(req,res);
});
router.get('/',(req,res)=>{
    getType(req,res);
});
router.delete('/:id',(req,res)=>{
    deleteType(req,res);
});
router.put('/:id',(req,res)=>{
    updateType(req,res);
});
module.exports=router;