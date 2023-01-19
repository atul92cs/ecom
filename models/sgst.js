const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Sgst=sequelize.define('sgst',{
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
    tableName:'sgst',
    freezeTableName:true
});
module.exports=Sgst;