let {DeliveryOption}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
const {Op}=require('sequelize');
const {conditionBuilder, generateCondition}=require('../helpers/condition-builder');

createDeliveryOptions=(req,res)=>{
    let {name}=req.body;
    DeliveryOption.create({name:name}).then(
        result=>{
                return res.status(successCode).json({
                    msg:'Delivery option created'
                });
        }
    ).catch(err=>{
            return res.status(dbError).json({
                msg:dbErrMessage,
                error:err
            });
    });
}

getDeliveryOptions=(req,res)=>{
   let {filter}=req.query;
   if(!filter)
   {
    DeliveryOption.findAll({}).then(result=>{
        return res.status(successCode).json({
            options:result
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
    DeliveryOption.findAll({where:{[Op.or]:condition}}).then(result=>{
        return res.status(successCode).json({
            options:result
        });
}).catch(err=>{
    return res.status(dbError).json({
        msg:dbErrMessage,
        error:err
    });
});
   }
}

updateDeliveryOption=(req,res)=>{
    let {id}=req.headers;
    let {name}=req.body;

    DeliveryOption.findOne({where:{id:id}}).then(result=>{
        result.name=name;
        result.save();
    }).then(result=>{
        return res.status(successCode).json({
            msg:'delivery option updated'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    })
}

deleteDeliveryOption=(req,res)=>{
    let {id}=req.headers;

    DeliveryOption.destroy({where:{id:id}}).then(result=>{
        return res.status(successCode).json({
            msg:'delivery option deleted'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
getDeliveryOptionsCount=(req,res)=>{
    let {filter}=req.query;
    if(!filter)
    {
        
        DeliveryOption.count({}).then(result=>{
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
        DeliveryOption.count({where:{[Op.and]:conditions}}).then(result=>{
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
module.exports={createDeliveryOptions,getDeliveryOptions,updateDeliveryOption,deleteDeliveryOption,getDeliveryOptionsCount};