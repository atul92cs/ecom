let {createIgst,deleteIgst,updateIgst,getIgst,igstCount}=require('../controllers');
let express=require('express');
let router=express.Router();
let parser=require('../helpers/file-uploader');
let {createIgstBulk}=require('../bulkops/igst');
router.post('/add',(req,res)=>{
    createIgst(req,res);
});
router.post('/bulk',parser.single('files'),(req,res)=>{
    createIgstBulk(req,res);
});
router.get('/',(req,res)=>{
    getIgst(req,res);
});
router.get('/count',(req,res)=>{
    igstCount(req,res);
});
router.delete('/:id',(req,res)=>{
    updateIgst(req,res);
});
router.put('/:id',(req,res)=>{
    deleteIgst(req,res);
});
module.exports=router;