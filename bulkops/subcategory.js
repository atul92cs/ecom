const {Subcategory}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let csv=require('csv-parser');
let fs=require('fs');

createSubcategoryBulk=(req,res)=>{
    let dataArray=[];
    fs.createReadStream(req.file.path).
    parse(csv())
    .on('data',(data)=>{
        dataArray.push(data);
    }).on('end',()=>{
        Subcategory.bulkCreate(dataArray)
        .then(()=>{
            return res.status(successCode).json({
                msg:'sub category uploaded'
            });
        }).catch(err=>{
            console.log(err);
        });
    });
}
module.exports={createSubcategoryBulk};