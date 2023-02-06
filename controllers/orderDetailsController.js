let {OrderDetails,Product, Order}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

getOrderDetails=(req,res)=>{
    OrderDetails.findAll({
        include:[
            {model:Product}
        ]
    }).then(result=>{
        return res.status(successCode).json({
            orders:result
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
};
getOrderDetailsByOrderId=(req,res)=>{
    let {id}=req.params;
    OrderDetails.findAll({where:{
        orderid:id
    },include:[{
        model:Product
    }]}).then(result=>{
        return res.status(successCode).json({
            orderdetails:result
        });
    }).catch(err=>{ 
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
getOrderDetailsCount=(req,res)=>{
    let {filter}=req.query;
    if(!filter)
    {
        
        OrderDetails.count({}).then(result=>{
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
        OrderDetails.count({where:{[Op.and]:conditions}}).then(result=>{
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
module.exports={getOrderDetails,getOrderDetailsByOrderId,getOrderDetailsCount};