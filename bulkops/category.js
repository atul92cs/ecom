const csv=require('csv-parser');
const {Category}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
const fs=require('fs');

createCategoryBulk=(req,res)=>{
    const dataArray=[];
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data',(data)=>{
        dataArray.push(data);
    }).on('end',()=>{
        Category.bulkCreate(dataArray).then(()=>{
            return res.status(successCode).json({
                msg:'data uploaded'
            });
        }).catch((error)=>{
            console.log(error);
        })
    });
}
module.exports={createCategory};