let {createDeliveryOptions,getDeliveryOptions,updateDeliveryOption,deleteDeliveryOption,getDeliveryOptionsCount}=require('../controllers');
let express=require('express');
let {createDeliveryOptionsBulk}=require('../bulkops/deliverytype');
let parser=require('../helpers/file-uploader');
let router=express.Router();

router.post('/add',(req,res)=>{
    createDeliveryOptions(req,res);
});
router.post('/bulk',parser.single('files'),(req,res)=>{
    createDeliveryOptionsBulk(req,res);
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
router.get('/count',(req,res)=>{
    getDeliveryOptionsCount(req,res);
});

module.exports=router;