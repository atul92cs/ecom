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
    productId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    freezeTableName:true,
    tableName:'dimension'
});
Product.hasMany(Dimension,{foreignKey:'productId'});
Dimension.belongsTo(Product,{foreignKey:'productId'});
module.exports=Dimension;