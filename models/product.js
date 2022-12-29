const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Category=require('./category');
const Subcategory = require('./subcategory');
const Product=sequelize.define('product',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    typeid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    categoryid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    subcategoryid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    cost:{
        type:DataTypes.DECIMAL,
        allowNull:false
    }
});
Category.hasMany(Product,{foreignKey:'categoryid'});
Product.belongsTo(Category,{foreignKey:'categoryid'});
Subcategory.hasMany(Product,{foreignKey:'subcategoryid'});
Product.belongsTo(Subcategory,{foreignKey:'subcategoryid'});
module.exports=Product;