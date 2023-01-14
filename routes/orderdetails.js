let {getOrderDetails,getOrderDetailsByOrderId,getOrderDetailsCount}=require('../controllers');
let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    getOrderDetails(req,res);
});
router.get('/count',(req,res)=>{
    getOrderDetailsCount(req,res);
});
router.get('/:id',(req,res)=>{
    getOrderDetailsByOrderId(req,res);
});

module.exports=router;