let {queryInterface}=require('sequelize');
let  DeliveryOps=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

insertDeliveryBulk=(req,res)=>{
    let {productid,pincodes}=req.body;
      let deliveryops=createPincode(productid,pincodes);
    queryInterface.bulkInsert('deliveryops',deliveryops).then(res=>{
        return res.status(successCode).json({
            msg:'deliveryoptions created'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
insertDelivery=(req,res)=>{
    let {productid,pincode}=req.body;
    DeliveryOps.create({
        productid:productid,
        pincode:pincode
    }).then(result=>{
        return res.status(successCode).json({
            msg:'delivery option created'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
getDelivery=(req,res)=>{
    DeliveryOps.findAll({}).then(result=>{
        return res.status(successCode).json({
            deliveryops:result
        });

    }).catch(error=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:error
        });
    });
}
updateDelivery=(req,res)=>{
    let {id}=req.params;
    let {productid,pincode}=req.body;
    DeliveryOps.findOne({where:{id:id}}).then(deliveryop=>{
            deliveryop.productid=productid;
            deliveryop.pincode=pincode;
            deliveryop.save();
        }).then(result=>{
            return res.status(successCode).json({
                msg:'Delivery option updated'
            });
        }).catch(err=>{
            return res.status(dbError).json({
                msg:dbErrMessage,
                error:err
            });
    });
}
deleteDelivery=(req,res)=>{
    let {id}=req.params;
    DeliveryOps.destroy({where:{id:id}}).then(result=>{
        return res.status(successCode).json({
            msg:'Deleted deliveryoptions'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage
        });
    });
}
createPincode=(productid,pincodes)=>{
    let deliveryoptions=[];
    pincodes.forEach(pincode => {
        let product={};
        product.productid=productid;
        product.pincode=pincode;
        deliveryoptions.push(product);
    });
    return deliveryoptions;
}
module.exports={insertDelivery,insertDeliveryBulk,updateDelivery,deleteDelivery,getDelivery};