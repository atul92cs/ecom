const{Sequelize,DataTypes}=require('sequelize');
const Order=require('./order');
const Product=require('./product');
const sequelize=require('../config/database');
const DeliveryOption=sequelize.define('deliveryopt',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    freezeTableName:true,
    tableName:'deliveryopt'
});
DeliveryOption.hasMany(Product,{foreignKey:'optionId'});
Product.belongsTo(DeliveryOption,{foreignKey:'optionId'});
module.exports=DeliveryOption;