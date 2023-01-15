let {Product,Subcategory,Category,Type,Dimension,Picture}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

createProduct=(req,res)=>{
    let {name,cost,categoryId,subcategoryId,typeId,optionId}=req.body;
    Product.create({
        name:name,
        cost:cost,
       categoryId:categoryId,
       subcategoryId:subcategoryId,
       typeId:typeId,
       optionId:optionId
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Product created'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

updateProduct=(req,res)=>{
    let {id}=req,params;
    let {name,cost,categoryId,subcategoryId,typeId}=req.body;
    Product.findOne({where:{id:id}}).then(product=>{
        product.name=name;
        product.cost=cost;
        product.categoryId=categoryId;
        product.subcategoryId=subcategoryId;
        product.typeId=typeId;
        product.save();
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Product updated'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

deleteProduct=(req,res)=>{
    let {id}=req.params;

    Product.destroy({where:{id:id}}).then(reuslt=>{
        return res.status(successCode).json({
            msg:'Product deleted'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

getProduct=(req,res)=>{
    Product.findAll({
        include:[
            {
                model:Category
            },
            {
                model:Subcategory
            },
            {
                model:Type
            },
            {
                model:Dimension
            },
            {
                model:Picture
            }
        ]
    }).then(result=>{
        return res.status(successCode).json({
            products:result
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
getProductCount=(req,res)=>{
    let{filter}=req.query;
    Product.count({filter}).then(result=>{
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
module.exports={createProduct,updateProduct,deleteProduct,getProduct,getProductCount};