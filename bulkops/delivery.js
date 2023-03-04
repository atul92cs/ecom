const csv=require('csv-parser');
let  {DeliveryOps}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let fs=require('fs');
createDeliveryOpsbulk=(req,res)=>{
    const dataArray=[];
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data',(data)=>{
        dataArray.push(data);
    }).on('end',()=>{
        DeliveryOps.bulkCreate(dataArray).then(()=>{
            return res.status(successCode).json({
                msg:'Delivery ops created'
            });
        }).catch(err=>{
            console.log(err);
        });
    });
}
module.exports={createDeliveryOpsbulk};