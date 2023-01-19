const {Subcategory,Category}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let {model} =require('sequelize');
createSubcategory=(req,res)=>{
    let {name,categoryId}=req.body;
    Subcategory.create({
        name:name,
        categoryId:categoryId
    }).then(result=>{
        return res.status(successCode).json({
            msg:'sub category created'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
getSubcategory=(req,res)=>{
    Subcategory.findAll({
         include:[{model:Category,required:false,attributes:['id','name']}]
    }).then(result=>{
        return res.status(successCode).json({
            subcategories:result
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
updateSubcategory=(req,res)=>{
    let {name,category}=req.body;
    let {id}=req.params;
    Subcategory.findOne({where:{id:id}}).then(subcategory=>{
        subcategory.name=name,
        subcategory.categoryId=category
        subcategory.save()
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Subcategory updated'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

deleteSubcategory=(req,res)=>{
    let {id}=req.params;
    Subcategory.destroy({where:{id:id}}).then(result=>{
            return res.status(successCode).json({
                msg:'Subcategory deleted'
            });
    }).catch(err=>{
            return res.status(dbError).json({
                msg:dbErrMessage,
                error:err
            });
    });
}
getSubCategoryCount=(req,res)=>{
    let {filter}=req.query
    console.log(filter);
    Subcategory.count(filter).then(result=>{
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
module.exports={createSubcategory,getSubcategory,updateSubcategory,deleteSubcategory,getSubCategoryCount};