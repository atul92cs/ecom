const {Category}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
const {Op}=require('sequelize');
const {generateConditionOr}=require('../helpers/condition-builder');
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
    let {id,name}=req.query;
    if(!id && !name){
    let condition=generateConditionOr(req);
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
  else
  {
    let condition=generateConditionOr(req);
    Category.findAll({
        where:{[Op.or]:condition}
    }).then(result=>{
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
}
getCategoryCount=(req,res)=>{
    
     let conditions=generateConditionOr(req);
    Category.count({where:{[Op.or]:conditions}}).then(result=>{
        return res.status(successCode).json({
            count:result
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
module.exports={createCategory,updateCategory,deleteCategory,getCategory,getCategoryCount};