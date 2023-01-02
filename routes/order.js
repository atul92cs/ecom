let {getOrder,getOrders,updateOrderStatus}=require('../controllers');
let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    getOrders(req,res);
});
router.get('/:id',(req,res)=>{
    getOrder(req,res);
});
router.put('/:id',(req,res)=>{
    updateOrderStatus(req,res);
});
module.exports=router;