let {Product,Subcategory,Category,Type,Dimension,Picture}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

createProduct=(req,res)=>{
    let {name,cost,categoryId,subcategoryId,typeId,optionId,sgst,cgst,igst}=req.body;
       tax=calculateGst(sgst,cgst,igst,cost);
       cost=cost+tax;
    Product.create({
        name:name,
        cost:cost,
       categoryId:categoryId,
       subcategoryId:subcategoryId,
       typeId:typeId,
       optionId:optionId,
       Sgst:sgst,
       Cgst:cgst,
       Igst:igst
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
    let {id}=req.params;
    let {name,cost,categoryId,subcategoryId,typeId,sgst,cgst,igst}=req.body;
    tax=calculateGst(sgst,cgst,igst,cost);
       cost=cost+tax;
    Product.findOne({where:{id:id}}).then(product=>{
        product.name=name;
        product.cost=cost;
        product.categoryId=categoryId;
        product.subcategoryId=subcategoryId;
        product.typeId=typeId;
        product.Sgst=sgst;
        product.Cgst=cgst;
        product.Igst=igst;
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
    let {filter}=req.query;
    if(!filter)
    {
        
        Product.count({}).then(result=>{
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
    else
    {
        let conditions=generateCondition(req);
        Product.count({where:{[Op.and]:conditions}}).then(result=>{
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
}
 calculateGst=(sgst,cgst,igst,cost)=>{
    let tax=(cost*((sgst+cgst+igst)/100));
    return tax;
 }
module.exports={createProduct,updateProduct,deleteProduct,getProduct,getProductCount};