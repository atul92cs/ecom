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
    pincode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    freezeTableName:true,
    tableName:'deliveryop'
});
Product.hasMany(DeliveryOps,{foreignKey:'productId'});
DeliveryOps.belongsTo(Product,{foreignKey:'productId'});
module.exports=DeliveryOps;