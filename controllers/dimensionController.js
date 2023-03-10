const {Dimension,Product}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
const { generateCondition } = require('../helpers/condition-builder');
const {Or}=require('sequelize');
createDimension=(req,res)=>{
    let {measurement,productId}=req.body;
    Dimension.create({
        measurement:measurement,
        productId:productId
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Dimension created'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

updateDimenstion=(req,res)=>{
    let {id}=req.params;
    let {measurement,productid}=req.body;
    Dimension.findOne({where:{id:id}}).then(dimension=>{
        dimension.measurement=measurement;
        dimension.productid=productid;
        dimension.save();
    }).then(result=>{
        return res.status(successCode).json({
            msg:'Dimension updated'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });

}

deleteDimension=(req,res)=>{
    Dimension.destroy({where:{id:id}}).then(result=>{
        return res.status(successCode).json({
            msg:'Dimension deleted for product'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

getDimension=(req,res)=>{
    let {filter}=req.query;
    if(!filter)
    {
        Dimension.findAll({
            include:[
                {
                    model:Product
                }
            ]
        }).then(result=>{
            return res.status(successCode).json({
                products:result
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
        Dimension.findAll({
            where:{[Op.or]:condition},
            include:[
                {
                    model:Product
                }
            ]
        }).then(result=>{
            return res.status(successCode).json({
                products:result
            });
        }).catch(err=>{
            return res.status(dbError).json({
                msg:dbErrMessage,
                error:err
            });
        });
    }

   
}
getDimensionCount=(req,res)=>{
    let {filter}=req.query;
    if(!filter)
    {
        
        Dimension.count({}).then(result=>{
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
        Dimension.count({where:{[Op.and]:conditions}}).then(result=>{
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
module.exports={createDimension,updateDimenstion,deleteDimension,getDimension,getDimensionCount};