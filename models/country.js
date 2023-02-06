const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../config/database');
const Product=require('./product');
const Country=sequelize.define('country',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    tableName:'country',
    freezeTableName:true
});
Country.hasMany(Product,{foreignKey:'countryId'});
Product.belongsTo(Country);
module.exports=Country;