const {Sgst} =require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

createSgst=(req,res)=>{
    let {name,value}=req.body;
    Sgst.create({
        name:name,
        value:value
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Sgst created'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

deleteSgst=(req,res)=>{
    let {id}=req.params;
    Sgst.destroy({where:{id:id}}).then(result=>{
        return res.status(successCode).json({
            msg:'Sgst deleted'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    })
}

updateSgst=(req,res)=>{
    let {id}=req.params;
    let {name,value}=req.body;
    Sgst.findOne({where:{id:id}}).then(
        result=>{
            result.name=name;
            result.value=value;
            result.save()
        }
    ).then(result=>{
        return res.status(successCode).json({
            msg:'Sgst updated'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
getSgst=(req,res)=>{
    Sgst.findAll({}).then(result=>{
        return res.status(successCode).json({
            sgsts:result
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });       
    })
}
sgstCount=(req,res)=>{
    let {filter}=req.query;
    Sgst.count(filter).then(result=>{
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
module.exports={createSgst,deleteSgst,updateSgst,getSgst,sgstCount};