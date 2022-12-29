const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Product=require('./product');
const Dimension=sequelize.define('dimension',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    measurement:{
        type:DataTypes.STRING,
        allowNull:false
    },
    productid:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});
Product.hasMany(Dimension,{foreignKey:'productid'});
Dimension.belongsTo(Product,{foreignKey:'productid'});
module.exports=Dimension;