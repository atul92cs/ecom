const {Cgst} =require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
const {generateCondition}=require('../helpers/condition-builder');
const {Op}=require('sequelize');
createCgst=(req,res)=>{
    let {name,value}=req.body;
    Cgst.create({
        name:name,
        value:value
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Cgst created'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

deleteCgst=(req,res)=>{
    let {id}=req.params;
    Cgst.destroy({where:{id:id}}).then(result=>{
        return res.status(successCode).json({
            msg:'Cgst deleted'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    })
}

updateCgst=(req,res)=>{
    let {id}=req.params;
    let {name,value}=req.body;
    Cgst.findOne({where:{id:id}}).then(
        result=>{
            result.name=name;
            result.value=value;
            result.save()
        }
    ).then(result=>{
        return res.status(successCode).json({
            msg:'Cgst updated'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}
getCgst=(req,res)=>{
    let {filter}=req.query;
    if(!filter)
    {
        Cgst.findAll({}).then(result=>{
            return res.status(successCode).json({
                cgsts:result
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
        Cgst.findAll({where:{[Op.or]:condition}}).then(result=>{
            return res.status(successCode).json({
                cgsts:result
            });
        }).catch(err=>{
            return res.status(dbError).json({
                msg:dbErrMessage,
                error:err
            });       
        });
    }
}
cgstCount=(req,res)=>{
    let {filter}=req.query;
    if(!filter)
    {
        
        Cgst.count({}).then(result=>{
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
        Cgst.count({where:{[Op.and]:conditions}}).then(result=>{
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
module.exports={createCgst,deleteCgst,updateCgst,getCgst,cgstCount};