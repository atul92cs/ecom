const csv=require('csv-parser');
const {Cgst} =require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
const fs=require('fs');
createCgstBulk=(req,res)=>{
    const dataArray=[];
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data',(data)=>{
       dataArray.push(data); 
    }).on('end',()=>{
        Cgst.bulkCreate(dataArray).then(()=>{
            return res.status(successCode).json({
                msg:'cgst created'
            });
        }).catch((error)=>{
            console.log(error);
        });
    });
}
module.exports={createCgstBulk};