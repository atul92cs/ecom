let {createType,getType,deleteType,updateType,getTypeCount}=require('../controllers');
let express=require('express');
let router=express.Router();
let parser=require('../helpers/file-uploader');
let {createTypeBulk}=require('../bulkops/type');
router.post('/add',(req,res)=>{
    createType(req,res);
});
router.post('/bulk',parser.single('files'),(req,res)=>{
    createTypeBulk(req,res);
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
router.get('/count',(req,res)=>{
    getTypeCount(req,res);
});
module.exports=router;