let {uploadPicture,getPictures}=require('../controllers');
let express=require('express');
let router=express.Router();
let parser=require('../helpers/file-uploader');
router.post('/upload',parser.single('picture'),(req,res)=>{uploadPicture(req,res)});
router.get('/:id',(req,res)=>{getPictures(req,res)});
module.exports=router;