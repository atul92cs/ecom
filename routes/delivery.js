let {insertDelivery,insertDeliveryBulk,updateDelivery,deleteDelivery,getDelivery,getDeliveryCount}=require('../controllers');
let express=require('express');
let router=express.Router();
let parser=require('../helpers/file-uploader');
let {createDeliveryOpsbulk}=require('../bulkops/delivery');
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
router.post('/upload',parser.single('files'),(req,res)=>{
    createDeliveryOpsbulk(req,res);
});
router.delete('/:id',(req,res)=>{
    deleteDelivery(req,res);
});
router.get('/count',(req,res)=>{
    getDeliveryCount(req,res);
});
module.exports=router;