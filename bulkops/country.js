const csv=require('csv-parser');
let {Country}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let fs=require('fs');
createCountryBulk=(req,res)=>{
    const dataArray=[];
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data',(data)=>{
        dataArray.push(data);
    }).on('end',()=>{
        Country.bulkCreate(dataArray)
        .then(()=>{
            return res.status(successCode).json({
                msg:'categories created'
            });
        }).catch(err=>{
            console.log(err);
        });
    });
}
module.exports={createCountryBulk};