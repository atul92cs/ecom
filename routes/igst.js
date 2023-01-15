let {createIgst,deleteIgst,updateIgst,getIgst,igstCount}=require('../controllers');
let express=require('express');
let router=express.Router();

router.post('/add',(req,res)=>{
    createIgst(req,res);
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