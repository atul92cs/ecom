let {Picture}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

uploadPicture=(req,res)=>{
    let {productid}=req.body;
    let file=req.file.path;
    Picture.create({
        path:file,
        productId:productid
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Product uploaded'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
    
}

getPictures=(req,res)=>{
    let {id}=req.params;
    Picture.findAll({where:{productId:id}}).then(result=>{
        return res.status(successCode).json({
            pictures:result
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
module.exports={uploadPicture,getPictures};