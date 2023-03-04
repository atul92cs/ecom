const {Sgst} =require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let csv=require('csv-parser');
let fs=require('fs');

createSgstBulk=(req,res)=>{
    let dataArray=[];
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data',(data)=>{
        dataArray.push(data);
    }).on('end',()=>{
        Sgst.bulkCreate(dataArray)
        .then(()=>{
            return res.status(successCode).json({
                msg:'sgsts uploaded'
            });
        }).catch(err=>{
            console.log(err);
        });
    });
}
module.exports={createSgstBulk};