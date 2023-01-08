let {Product,Subcategory,Category,Type,Dimension,Picture}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

createProduct=(req,res)=>{
    let {name,cost,category,subcategory,type}=req.body;
    Product.create({
        name:name,
        cost:cost,
       categoryId:category,
       subcategoryId:subcategory,
       typeId:type
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
    let {name,cost,categoryid,subcategoryid,typeid}=req.body;
    Product.findOne({where:{id:id}}).then(product=>{
        product.name=name;
        product.cost=cost;
        product.categoryid=categoryid;
        product.subcategoryid=subcategoryid;
        product.typeid=typeid;
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

module.exports={createProduct,updateProduct,deleteProduct,getProduct};