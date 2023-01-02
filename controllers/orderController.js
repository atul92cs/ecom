let Order=require('../models');
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

    }).catch(error=>{

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

module.exports={getOrder,getOrders,updateOrderStatus};