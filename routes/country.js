let {createCountry,deleteCountry,updateCountry,getCountries,getCountriesCount}=require('../controllers');
let express=require('express');
let router=express.Router();

router.get('/',(req,res)=>{
    getCountries(req,res);
});

router.post('/',(req,res)=>{
    createCountry(req,res);
});

router.delete('/:id',(req,res)=>{
    deleteCountry(req,res);
});
router.put('/:id',(req,res)=>{
    updateCountry(req,res);
});
router.get('/count',(req,res)=>{
    getCountriesCount(req,res);
});
module.exports=router;