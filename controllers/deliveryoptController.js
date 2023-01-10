let {DeliveryOption}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');


createDeliveryOptions=(req,res)=>{
    let {name}=req.body;
    DeliveryOption.create({name:name}).then(
        result=>{
                return res.status(successCode).json({
                    msg:'Delivery option'
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

module.exports={createDeliveryOptions,getDeliveryOptions,updateDeliveryOption,deleteDeliveryOption};