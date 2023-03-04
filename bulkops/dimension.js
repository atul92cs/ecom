const {Dimension}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let fs=require('fs');
const csv=require('csv-parser');

dimensioncreateBulk=(req,res)=>{
    let dataArray=[];
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data',(data)=>{
        dataArray.push(data);
    }).on('end',()=>{
        Dimension.bulkCreate(dataArray)
        .then(()=>{
            return res.status(successCode).json({
                msg:'dimension data created'
            });
        }).catch(err=>{
            console.log(err);
        });
    });
}
module.exports={dimensioncreateBulk};