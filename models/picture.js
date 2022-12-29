const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Product=require('./product');
const Picture=sequelize.define('product_picture',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true
    },
    path:{
        type:DataTypes.STRING,
        allowNull:false
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});
Product.hasMany(Picture,{foreignKey:'productId'});
Picture.belongsTo(Product,{foreignKey:'productId'});
module.exports=Picture;