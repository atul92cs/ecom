const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Cgst=sequelize.define('cgst',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    value:{
        type:DataTypes.DECIMAL,
        allowNull:false
    }
},{
    tableName:'cgst',
    freezeTableName:true
});
module.exports=Cgst;