const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
let Order=sequelize.define('order',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    cost:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    user:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    freezeTableName:true,
    tableName:'order'
});

module.exports=Order;