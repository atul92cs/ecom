const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Category=sequelize.define('category',{
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
});
module.exports=Category;