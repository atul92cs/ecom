let {createDimension,updateDimenstion,deleteDimension,getDimension,getDimensionCount}=require('../controllers');
let express=require('express');
let router=express.Router();

router.post('/add',(req,res)=>{
    createDimension(req,res);
});

router.put('/:id',(req,res)=>{
    updateDimenstion(req,res);
});
router.delete('/:id',(req,res)=>{
    deleteDimension(req,res);
});
router.get('/',(req,res)=>{
    getDimension(req,res);
});
router.get('/count',(req,res)=>{
    getDimensionCount(req,res);
});
module.exports=router;