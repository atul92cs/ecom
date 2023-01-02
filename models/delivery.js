const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Product=require('./product');
const DeliveryOps=sequelize.define('deliveryop',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    productid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    pincode:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
Product.hasMany(DeliveryOps,{foreignKey:'productid'});
DeliveryOps.belongsTo(Product,{foreignKey:'productid'});
module.exports=DeliveryOps;