const {Igst} =require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let csv=require('csv-parser');
let fs=require('fs');

createIgstBulk=(req,res)=>{
    let dataArray=[];
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data',(data)=>{
        dataArray.push(data);
    }).on('end',()=>{
        Igst.bulkCreate(dataArray)
        .then(()=>{
            return res.status(successCode).json({
                msg:'Igst created in bulk'
            });
        }).catch(err=>{
            console.log(err);
        });
    });
}
module.exports={createIgstBulk};