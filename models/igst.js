const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Igst=sequelize.define('igst',{
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
    tableName:'igst',
    freezeTableName:true
});
module.exports=Igst;