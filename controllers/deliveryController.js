let {queryInterface}=require('sequelize');
let  {DeliveryOps}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
let {Op}=require('sequelize');
let {conditionBuilder, generateCondition}=require('../helpers/condition-builder');
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
  let {filter}=req.query;
  if(!filter)
  {
    DeliveryOps.findAll({}).then(result=>{
        return res.status(successCode).json({
            deliveryops:result
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
    let condition=generateCondition(req,res);
    DeliveryOps.findAll({where:{[Op.or]:condition}}).then(result=>{
        return res.status(successCode).json({
            deliveryops:result
        });
       }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
       });
  }
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
            msg:dbErrMessage,
            error:err
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
getDeliveryCount=(req,res)=>{
    let {filter}=req.query;
    if(!filter)
    {
        
        DeliveryOps.count({}).then(result=>{
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
        DeliveryOps.count({where:{[Op.and]:conditions}}).then(result=>{
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
module.exports={insertDelivery,insertDeliveryBulk,updateDelivery,deleteDelivery,getDelivery,getDeliveryCount};