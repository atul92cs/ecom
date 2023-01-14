let {getOrder,getOrders,updateOrderStatus,getOrderCount}=require('../controllers');
let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    getOrders(req,res);
});
router.get('/count',(req,res)=>{
    getOrderCount(req,res);
});
router.get('/:id',(req,res)=>{
    getOrder(req,res);
});
router.put('/:id',(req,res)=>{
    updateOrderStatus(req,res);
});

module.exports=router;