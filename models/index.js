const Category=require('./category');
const Subcategory=require('./subcategory');
const Product=require('./product');
const Type=require('./type');
const Dimension=require('./dimension');
const Picture=require('./picture');
const sequelize=require('../config/database');
module.exports={
    Category,
    Subcategory,
    Product,
    Type,
    Dimension,
    Picture
}
sequelize.sync({alter:true}).then((result)=>{
    
    console.log('table synced');
}).catch(err=>{
    console.log('error-->',err);
});