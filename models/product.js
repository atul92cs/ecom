const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Category=require('./category');
const Subcategory = require('./subcategory');
const Type=require('./type');
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
    typeId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    cost:{
        type:DataTypes.DECIMAL,
        allowNull:false
    }
},{
    freezeTableName:true,
    tableName:'product'
});
Category.hasMany(Product,{foreignKey:'categoryId'});
Product.belongsTo(Category,{foreignKey:'categoryId'});
Subcategory.hasMany(Product,{foreignKey:'subcategoryId'});
Product.belongsTo(Subcategory,{foreignKey:'categoryId'});
Type.hasMany(Product,{foreignKey:'typeId'});
Product.belongsTo(Type,{foreignKey:'typeId'});
module.exports=Product;