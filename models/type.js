const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Product=require('./product');
const Type=sequelize.define('product_type',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    freezeTableName:true,
    tableName:'product_type'
});

module.exports=Type;
