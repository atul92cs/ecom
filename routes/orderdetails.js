let {getOrderDetails,getOrderDetailsByOrderId}=require('../controllers');
let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    getOrderDetails(req,res);
});
router.get('/:id',(req,res)=>{
    getOrderDetailsByOrderId(req,res);
});

module.exports=router;