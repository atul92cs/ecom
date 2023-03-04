const csv=require('csv-parser');
let {DeliveryOption}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let fs=require('fs');

createDeliveryOptionsBulk=(req,res)=>{
    const dataArray=[];
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data',(data)=>{
        dataArray.push(data);
    }).on('end',()=>{
        DeliveryOption.bulkCreate(data)
        .then(()=>{
            return res.status(successCode).json({
                msg:'Delivery Options uploaded'
            });
        }).catch(err=>{
            console.log(err);
        });
    })
}

module.exports={createDeliveryOptionsBulk};