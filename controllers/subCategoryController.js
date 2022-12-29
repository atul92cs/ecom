const {Subcategory,Category}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

createSubcategory=(req,res)=>{
    let {name,category}=req.body;
    Subcategory.create({
        name:name,
        categoryId:category
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Picture uploaded'
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
        include:[
            {
                model:Category
            }
        ]
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
module.exports={createSubcategory,getSubcategory,updateSubcategory,deleteSubcategory};