let {Product}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let csv=require('csv-parser');
let fs=require('fs');
createProductBulk=(req,res)=>{
    let dataArray=[];
    fs.createReadStream(req.file.path)
    .pipe(csv())
    on('data',(data)=>{
        dataArray.push(data);
    }).on('end',()=>{
        Product.bulkCreate(dataArray).then(()=>{
            return res.status(successCode).json({
                msg:'product uploaded'
            });
        }).catch(err=>{
            console.log(err);
        });
    });
}
module.exports={createProductBulk};