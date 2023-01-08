const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Order = require('./order');
const Product = require('./product');
const OrderDetails=sequelize.define('orderdetail',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    orderId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    cost:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    freezeTableName:true,
    tableName:'orderdetail'
});
Order.hasMany(OrderDetails,{foreignKey:'orderId'});
OrderDetails.belongsTo(Order,{foreignKey:'orderId'});
Product.hasMany(OrderDetails,{foreignKey:'productId'});
OrderDetails.belongsTo(Product,{foreignKey:'productId'});
module.exports=OrderDetails;