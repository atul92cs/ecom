const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const User=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:true
    },
    mobile:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    freezeTableName:true,
    tableName:'picture'
});