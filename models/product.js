const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Category=require('./category');
const Subcategory = require('./subcategory');
const Type=require('./type');
const Igst=require('./igst');
const Cgst=require('./cgst');
const Sgst=require('./sgst');
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
    },
    categoryId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    subcategoryId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    optionId:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    Cgst:{
        type:DataTypes.DECIMAL,
        allowNull:true
    },
    Sgst:{
        type:DataTypes.DECIMAL,
        allowNull:true
    },
    Igst:{
        type:DataTypes.DECIMAL,
        allowNull:true
    },
    countryId:{
        type:DataTypes.INTEGER,
        allowNull:true
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
//Igst.hasMany(Product,{foreignKey:'igstId'});
//Product.belongsTo(Igst,{foreignKey:'igstId'});
//Cgst.hasMany(Product,{foreignKey:'cgstId'});
//Product.belongsTo(Cgst,{foreignKey:'cgstId'});
//Sgst.hasMany(Product,{foreignKey:'sgstId'});
//Product.belongsTo(Sgst,{foreignKey:'sgstId'});
module.exports=Product;