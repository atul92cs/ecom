let {createSgst,deleteSgst,updateSgst,getSgst,sgstCount}=require('../controllers');
let express=require('express');
let router=express.Router();

router.post('/add',(req,res)=>{
    createSgst(req,res);
});
router.get('/',(req,res)=>{
    getSgst(req,res);
});
router.get('/count',(req,res)=>{
    sgstCount(req,res);
});
router.delete('/:id',(req,res)=>{
   deleteSgst(req,res);
});
router.put('/:id',(req,res)=>{
    updateSgst(req,res);
});
module.exports=router;