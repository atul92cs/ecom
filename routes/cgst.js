let {createCgst,deleteCgst,updateCgst,getCgst,cgstCount}=require('../controllers');
let express=require('express');
let {createCgstBulk}=require('../bulkops/cgst');
let parser=require('../helpers/file-uploader');

let router=express.Router();

router.post('/bulk',parser.single('files'),(req,res)=>{
    createCgstBulk(req,res);
});
router.post('/add',(req,res)=>{
    createCgst(req,res);
});
router.get('/',(req,res)=>{
    getCgst(req,res);
});
router.get('/count',(req,res)=>{
    cgstCount(req,res);
});
router.delete('/:id',(req,res)=>{
    updateCgst(req,res);
});
router.put('/:id',(req,res)=>{
    deleteCgst(req,res);
});
module.exports=router;