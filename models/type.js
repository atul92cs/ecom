const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Product=require('./product');
const Type=sequelize.define('type',{
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
});
Type.hasMany(Product,{foreignKey:'typeid'});
Product.belongsTo(Type,{foreignKey:'typeid'});
module.exports=Type;
