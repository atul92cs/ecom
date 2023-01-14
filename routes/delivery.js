let {insertDelivery,insertDeliveryBulk,updateDelivery,deleteDelivery,getDelivery,getDeliveryCount}=require('../controllers');
let express=require('express');
let router=express.Router();

router.post('/',(req,res)=>{
    insertDelivery(req,res);
});
router.get('/',(req,res)=>{
    getDelivery(req,res);
});
router.put('/:id',(req,res)=>{
    updateDelivery(req,res);
});
router.post('/bulk',(req,res)=>{
    insertDeliveryBulk(req,res);
});
router.delete('/:id',(req,res)=>{
    deleteDelivery(req,res);
});
router.get('/count',(req,res)=>{
    getDeliveryCount(req,res);
});
module.exports=router;