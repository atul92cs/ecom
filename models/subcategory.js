const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Category=require('./category');
const Subcategory=sequelize.define('subcategory',{
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
    tableName:'subcategory'
});
Category.hasMany(Subcategory,{foreignKey:'categoryId'});
Subcategory.belongsTo(Category,{foreignKey:'categoryId'});
module.exports=Subcategory;
