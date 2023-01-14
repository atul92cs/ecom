const {Type}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');

createType=(req,res)=>{
    let {name}=req.body;
    Type.create({name:name}).then(result=>{
            return res.status(successCode).json({
                types:result
            });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
updateType=(req,res)=>{
    let {name}=req.body;
    let {id}=req.params;
    Type.findOne({whre:{id:id}}).then(type=>{
        type.name=name;
        type.save()
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Type Updated'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

deleteType=(req,res)=>{
    Type.destroy({where:{id:id}}).then(result=>{
        return res.status(successCode).json({
            msg:'Type Deleted'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

getType=(req,res)=>{
    Type.findAll({}).then(result=>{
        return res.status(successCode).json({
            types:result
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:Err
        });
    });
}
getTypeCount=(req,res)=>{
    let {filter}=req.query;
    
    Type.count(filter).then(result=>{
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
module.exports={createType,getType,deleteType,updateType,getTypeCount};