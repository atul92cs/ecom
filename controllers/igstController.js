const {Igst} =require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

createIgst=(req,res)=>{
    let {name,value}=req.body;
    Igst.create({
        name:name,
        value:value
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Igst created'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

deleteIgst=(req,res)=>{
    let {id}=req.params;
    Igst.destroy({where:{id:id}}).then(result=>{
        return res.status(successCode).json({
            msg:'Igst deleted'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    })
}

updateIgst=(req,res)=>{
    let {id}=req.params;
    let {name,value}=req.body;
    Igst.findOne({where:{id:id}}).then(
        result=>{
            result.name=name;
            result.value=value;
            result.save()
        }
    ).then(result=>{
        return res.status(successCode).json({
            msg:'Igst updated'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
getIgst=(req,res)=>{
    Igst.findAll({}).then(result=>{
        return res.status(successCode).json({
            igsts:result
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });       
    })
}
igstCount=(req,res)=>{
    let {filter}=req.query;
    Igst.count(filter).then(result=>{
        return res.status(successCode).json({
            count:result
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    })
}
module.exports={createIgst,deleteIgst,updateIgst,getIgst,igstCount};