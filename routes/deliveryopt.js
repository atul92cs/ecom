let {createDeliveryOptions,getDeliveryOptions,updateDeliveryOption,deleteDeliveryOption}=require('../controllers');
let express=require('express');
let router=express.Router();

router.post('/add',(req,res)=>{
    createDeliveryOptions(req,res);
});
router.get('/',(req,res)=>{
    getDeliveryOptions(req,res);
});
router.put('/:id',(req,res)=>{
    updateDeliveryOption(req,res);
});
router.delete('/:id',(req,res)=>{
    deleteDeliveryOption(req,res);
});

module.exports=router;