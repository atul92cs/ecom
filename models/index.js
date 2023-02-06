const Category=require('./category');
const Subcategory=require('./subcategory');
const Product=require('./product');
const Type=require('./type');
const Dimension=require('./dimension');
const Picture=require('./picture');
const DeliveryOps=require('./delivery');
const Order=require('./order');
const OrderDetails=require('./orderdetails');
const DeliveryOption=require('./deliverytype');
const Igst=require('./igst');
const Cgst=require('./cgst');
const Sgst=require('./sgst');
const Country=require('./country');
const sequelize=require('../config/database');
module.exports={
    Category,
    Subcategory,
    Product,
    Type,
    Dimension,
    Picture,
    DeliveryOps,
    Order,
    OrderDetails,
    DeliveryOption,
    Igst,
    Cgst,
    Sgst,
    Country
}
sequelize.sync({alter:true}).then((result)=>{
    
    console.log('table synced');
}).catch(err=>{
    console.log('error-->',err);
});