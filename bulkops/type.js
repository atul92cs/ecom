const {Type}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let csv=require('csv-parser');
let fs=require('fs');

createTypeBulk=(req,res)=>{
    let dataArray=[];
    fs.createReadStream(req.file.path).
    parse(csv())
    .on('data',(data)=>{
        dataArray.push(data);
    }).on('end',()=>{
        Type.bulkCreate(dataArray).then(()=>{
            return res.status(successCode).json({
                msg:'type uploaded'
            });
        }).catch((err)=>{
            console.log(err);
        });
    });
}
module.exports={createTypeBulk};