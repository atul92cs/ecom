let {OrderDetails,Product}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

getOrderDetails=(req,res)=>{
    OrderDetails.findAll({
        include:[
            {model:Product}
        ]
    }).then(result=>{
        return res.status(successCode).json({
            Orders:result
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
module.exports={getOrderDetails,getOrderDetailsByOrderId};