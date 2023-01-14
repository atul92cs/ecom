let {Order}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

getOrders=(req,res)=>{
    Order.findAll({}).then(result=>{
        return res.status(successCode).json({
            orders:result
        });
    }).catch(error=>{   
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:error
        });
    });
}

getOrder=(req,res)=>{
    let {id}=req.params;
    Order.findOne({where:{id:id}}).then(result=>{
        return res.status(successCode).json({
            order:result
        });
    }).catch(error=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:error
        });
    });
}
updateOrderStatus=(req,res)=>{
    let {id}=req.params;
    let {status}=req.body;
    Order.update({status:status},{where:{id:id}}).then(result=>{
            return res.status(successCode).json({
                msg:'Status updated'
            });
    }).catch(error=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:error
        });
    });
}
getOrderCount=(req,res)=>{
    let {filter}=req.query;
    Order.count(filter).then(result=>{
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
module.exports={getOrder,getOrders,updateOrderStatus,getOrderCount};