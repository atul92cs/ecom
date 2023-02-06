let {Country}=require('../models');
const {errorMsg,errorCode,successCode,createSuccess,dbError,dbErrMessage}=require('../constants/message');
const {generateCondition}=require('../helpers/condition-builder');
const {Op}=require('sequelize');

createCountry=(req,res)=>{
    let {name}=req.body;
    Country.create({name:name}).then(result=>{
        return res.status(successCode).json({
            msg:'country created'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

updateCountry=(req,res)=>{
    let {name}=req.body;
    let {id}=req.params;
    Country.findOne({where:{id:id}}).then(product=>{
        product.name=name;
        product.save();
    }).then(result=>{
        return res.status(successCode).json({
            msg:'country updated'
        });
    }).catch(err=>{
            return res.status(dbError).json({
                msg:dbErrMessage,
                error:err
            });
    })
}

deleteCountry=(req,res)=>{
    let {id}=req.params;
    Country.destroy({where:{id:id}}).then(result=>{
        return res.status(successCode).json({
            msg:'country deleted'
        });
    }).catch(err=>{
        return res.status(dbError).json({
            msg:dbErrMessage,
            error:err
        });
    });
}

getCountries=(req,res)=>{
    let {filter}=req.params;
    if(!filter)
    {
        Country.findAll({}).then(result=>{
            return res.status(successCode).json({
                countries:result
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
        Country.findAll({where:{[Op.or]:condition}}).then(result=>{
            return res.status(successCode).json({
                countries:result
            });
        }).catch(err=>{
            return res.status(dbError).json({
                msg:dbErrMessage,
                error:err
            });
        });
    }
}

getCountriesCount=(req,res)=>{
    let {filter}=req.params;
    if(!filter)
    {
        Country.count({}).then(result=>{
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
        let condition=generateCondition(req,res);
        Country.count({where:{[Op.or]:condition}}).then(result=>{
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

module.exports={createCountry,deleteCountry,updateCountry,getCountries,getCountriesCount};