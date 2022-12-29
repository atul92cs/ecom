const {Category}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

createCategory=(req,res)=>{
    let {name}=req.body;
    Category.create({name:name}).then(
        result=>{
            return res.status(successCode).json({
                msg:'Category Created'
            });
        }
    ).catch(err=>{
        return res.status(errorCode).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
updateCategory=(req,res)=>{
    let {name}=req.body;
    let {id}=req.params;
    Category.findOne({where:{id:id}}).then(category=>{
        category.name=name;
        category.save();
    }).then(result=>{
        return res.status(successCode).json({
            msg:'category updated'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

deleteCategory=(req,res)=>{
    let {id}=req.params;
    Category.delete({where:{id:id}}).then(result=>{
            return res.status(successCode).json({
                msg:'Category deleted'
            });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

getCategory=(req,res)=>{
    Category.findAll({}).then(result=>{
        return res.status(successCode).json({
            categories:result
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
module.exports={createCategory,updateCategory,deleteCategory,getCategory};